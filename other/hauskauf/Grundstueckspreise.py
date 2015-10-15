# -*- coding: utf-8 -*-
"""
Created on Thu Oct 15 10:54:38 2015

@author: benjamintanz
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import preprocessing






""" I. READ DATA """
landPrices = pd.read_csv('source_data/Grundstuecke/Baulandverkaeufe_0313.csv', na_values=['-','.','x'], header=0, nrows=23055, skiprows=6, names=['Jahr', 'KreisID', 'Kreisname', 'Eigenschaft','Einheit','Land_Ges','Land_Baureif'], sep=';', index_col=1, encoding='ISO-8859-1', decimal=',')
mappings = pd.read_csv('source_data/MAPPINGS.csv', na_values=['-','.'], header=0, sep=';', index_col=0, encoding='ISO-8859-1', decimal=',')


""" II. PREPROCESS DATA AND EXTRACT DATA OF INTEREST """
#landPrices = landPrices[landPrices.index != 'DG']





lp_13 = landPrices[(landPrices['Jahr'] == 2013) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_13.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_13.rename(columns={'Land_Baureif': '2013'}, inplace=True)

lp_12 = landPrices[(landPrices['Jahr'] == 2012) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_12.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_12.rename(columns={'Land_Baureif': '2012'}, inplace=True)

lp_11 = landPrices[(landPrices['Jahr'] == 2011) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_11.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_11.rename(columns={'Land_Baureif': '2011'}, inplace=True)

lp_10 = landPrices[(landPrices['Jahr'] == 2010) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_10.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_10.rename(columns={'Land_Baureif': '2010'}, inplace=True)

lp_09 = landPrices[(landPrices['Jahr'] == 2009) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_09.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_09.rename(columns={'Land_Baureif': '2009'}, inplace=True)

lp_08 = landPrices[(landPrices['Jahr'] == 2008) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_08.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_08.rename(columns={'Land_Baureif': '2008'}, inplace=True)

lp_07 = landPrices[(landPrices['Jahr'] == 2007) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_07.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_07.rename(columns={'Land_Baureif': '2007'}, inplace=True)

lp_06 = landPrices[(landPrices['Jahr'] == 2006) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_06.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_06.rename(columns={'Land_Baureif': '2006'}, inplace=True)

lp_05 = landPrices[(landPrices['Jahr'] == 2005) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_05.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_05.rename(columns={'Land_Baureif': '2005'}, inplace=True)

lp_04 = landPrices[(landPrices['Jahr'] == 2004) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_04.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_04.rename(columns={'Land_Baureif': '2004'}, inplace=True)

lp_03 = landPrices[(landPrices['Jahr'] == 2003) & (landPrices['Eigenschaft'] == 'Durchschnittlicher Kaufwert je qm')]
lp_03.drop(['Jahr','Land_Ges'], axis=1, inplace=True)
lp_03.rename(columns={'Land_Baureif': '2003'}, inplace=True)

landPricesSM = lp_13
landPricesSM['2012'] = lp_12['2012']
landPricesSM['2011'] = lp_11['2011']
landPricesSM['2010'] = lp_10['2010']
landPricesSM['2009'] = lp_09['2009']
landPricesSM['2008'] = lp_08['2008']
landPricesSM['2007'] = lp_07['2007']
landPricesSM['2006'] = lp_06['2006']
landPricesSM['2005'] = lp_05['2005']
landPricesSM['2004'] = lp_04['2004']
landPricesSM['2003'] = lp_03['2003']

(lp_03, lp_04, lp_05, lp_06, lp_07, lp_08, lp_09, lp_10, lp_11, lp_12, lp_13) = (None, None, None, None, None, None, None, None, None, None, None)

landPricesSM['HighchartsID'] = mappings['HIGHCHARTS']



""" III. GENERATE STATISTICS """
landPricesSM['landPrices10yGrowth'] = landPricesSM['2013']/landPricesSM['2003'] - 1
landPricesSM['landPrices5yGrowth'] = landPricesSM['2013']/landPricesSM['2008'] - 1
landPricesSM['landPrices5yGrowthPAPercent'] = ((landPricesSM['2013']/landPricesSM['2008']) ** (1/5) - 1) * 100
landPricesSM['landPrices3yGrowth'] = landPricesSM['2013']/landPricesSM['2010'] - 1
landPricesSM['landPrices1yGrowth'] = landPricesSM['2013']/landPricesSM['2012'] - 1


""" V. WRITE DATA TO FILE """
landPricesSM.to_json(path_or_buf='data/grundstueckspreise.json', orient='index')

