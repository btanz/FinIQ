# -*- coding: utf-8 -*-
"""
Created on Tue Oct 13 16:54:38 2015

@author: benjamintanz
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import preprocessing



""" I. READ DATA """
algII_13 = pd.read_csv('source_data/Hartz4Empfaenger2013Kreise.csv', na_values=['-'], header=0, skiprows=8, names=['Stichtag','KreisID','Kreisname','Empfänger_Gesamt','SGBII','ALGII_Anteil','SozialG_Anteil','SGBXII_1','SGBXII_2','ASYL'],sep=';', index_col=1, encoding='ISO-8859-1', skipfooter=5, engine='python')

bev_13 = pd.read_csv('source_data/BevoelkerungKreise13.csv', na_values=['-'], header=0, skiprows=7, names=['KreisID','Kreisname','Stichtag','Bev_Ges','Bev_Male','Bev_Female'],sep=';', index_col=0, encoding='ISO-8859-1', skipfooter=14, engine='python')

unemp_13 = pd.read_csv('source_data/ArbeitsloseKreise13.csv', na_values=['-','.'], header=0, skiprows=9, nrows=523, names=['Stichtag','KreisID','Kreisname','AL','AL_Ausl','AL_schwerb','AL_15_20','AL_15_25','AL_55_65','AL_Langzeit','AL_QUOTE_ABH_PERS','AL_QUOTE_ALLE_PERS','AL_QUOTE_MALE','AL_QUOTE_FEMALE','AL_QUOTE_AUSL','AL_QUOTE_15_25'],sep=';', index_col=1, encoding='ISO-8859-1', decimal=',')

emp_13 = pd.read_csv('source_data/BeschaeftigteKreise13.csv', na_values=['-','.'], header=0, skiprows=12, nrows=1572, names=['Stichtag','KreisID','Kreisname','BeschArt','BeschGes','BeschMale','BeschFemale','BeschAusl','BeschAuslMale','BeschAuslFemale'],sep=';', index_col=1, encoding='ISO-8859-1', decimal=',')
emp_13 = emp_13[emp_13.BeschArt == 'Insgesamt']

bevAge_13 = pd.read_csv('source_data/BevoelkerungAlterKreise13.csv', na_values=['-','.'], header=0, skiprows=19, nrows=6288, names=['KreisID','Kreisname','AltersGr','Ges','Male','Female'],sep=';', index_col=0, encoding='ISO-8859-1', decimal=',')
bevAge_13 = bevAge_13[bevAge_13.AltersGr != 'Insgesamt']
bevAge_13 = bevAge_13.groupby(lambda x:x).sum()

income_12 = pd.read_csv('source_data/EinkommenKreise12.csv', na_values=['-','.'], header=0, skiprows=7, nrows=524, names=['Jahr','KreisID','Kreisname','IncGes','IncPerCapita'],sep=';', index_col=1, encoding='ISO-8859-1', decimal=',')

bip_12 = pd.read_csv('source_data/BIPKreise12.csv', na_values=['-','.'], header=0, skiprows=10, nrows=523, names=['Jahr','KreisID','Kreisname','BIPabs','BIPPerEmployed','BIPPerCapita','One','Two','Three','Four','Five','Six','Seven','Eight'],sep=';', index_col=1, encoding='ISO-8859-1', decimal=',')

mappings = pd.read_csv('source_data/MAPPINGS.csv', na_values=['-','.'], header=0, sep=';', index_col=0, encoding='ISO-8859-1', decimal=',')



""" II. CREATE TARGET DATA FRAME """
result = pd.DataFrame(data=bev_13)
result.drop('Bev_Male',axis=1,inplace=True)
result.drop('Bev_Female',axis=1,inplace=True)
result.drop('Stichtag',axis=1,inplace=True)



""" III. ENRICH TARGET DATA """
result['ALGII_number'] = algII_13['ALGII_Anteil']
result['ALGII_ratio'] = algII_13['ALGII_Anteil'] / result['Bev_Ges'] 

# add Berlin and Hamburg ALG II ratios from Statista
result['ALGII_ratio'][11] = 0.165
result['ALGII_ratio'][2] = 0.105


result['UNEMP_ratio'] = unemp_13['AL_QUOTE_ABH_PERS'] / 100 
result['Arbeitsplatzversorgung'] = emp_13['BeschGes'] / bevAge_13['Ges']
result['INCOME'] = income_12['IncPerCapita']
result['BIP'] = bip_12['BIPPerEmployed']
result['HighchartsID'] = mappings['HIGHCHARTS']



""" IV. PROCESS TARGET DATA """
def minMaxScale(col):
    return (col - col.min()) / (col.max() - col.min())

result['ALGII_ratio_scaled'] = 1 - minMaxScale(result['ALGII_ratio'])
result['UNEMP_ratio_scaled'] = 1 - minMaxScale(result['UNEMP_ratio'])
result['Arbeitsplatzversorgung_scaled'] = minMaxScale(result['Arbeitsplatzversorgung'])
result['INCOME_scaled'] = minMaxScale(result['INCOME'])
result['BIP_scaled'] = minMaxScale(result['BIP'])

result['MARKETIND'] = 0.2 * result['ALGII_ratio_scaled'] + 0.2 * result['UNEMP_ratio_scaled'] + 0.2 * result['Arbeitsplatzversorgung_scaled'] + 0.2 * result['INCOME_scaled'] + 0.2 * result['BIP_scaled'] 



""" V. WRITE DATA TO FILE """
result.to_json(path_or_buf='data/besteArbeitsmaerkte.json', orient='index')



