import numpy as np
import pandas as pd

#data visualize
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_style("darkgrid")

df=pd.read_csv("mars-weather.csv",index_col=0) #mars-weather.csv is not found
df.head()
