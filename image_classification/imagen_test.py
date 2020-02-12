
# python processing.py -d dogs-vs-cats
# python processing.py --dataset dogs-vs-cats


import csv
import cv2
import numpy as np
import argparse
from imutils import paths
import os

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required = True, help = "Path to the image")
args = vars(ap.parse_args())
 

features = []
image = cv2.imread(args["image"])
	
image = cv2.resize(image, (32, 32))

means = cv2.mean(image)
#print(means)
means = means[:3]
#print(means)
(means, stds) = cv2.meanStdDev(image)
#print(means, stds)
stats = np.concatenate([means, stds]).flatten()
print(stats)

#	hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
#	hist = cv2.calcHist([hsv], [0, 1, 2], None, [8, 8, 8], [0, 180, 0, 256, 0, 256])
#	feature = cv2.normalize(hist, hist).flatten()  #entrada2
	
#label = args["image"].split(os.path.sep)[-1].split(".")[0]

	#image1=np.array(image1)

	#feature = feature.tolist()
stats = stats.tolist()

	#image1.append(label)
#stats.append(label)

	#rawImages.append(image1)
features.append(stats)
	#print(label)



with open('point.txt', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(features)    
	

#image = imread('charizard.png', mode="RGB")
#print(image.shape)  #altura(height) ancho(width) canal
#raw = image.flatten()
#print(raw.shape)
#print(raw)


'''
means = cv2.mean(image)
#print(means)
means = means[:3]
#print(means)
(means, stds) = cv2.meanStdDev(image)
#print(means, stds)
stats = np.concatenate([means, stds]).flatten()
print(stats)
'''

#hist = cv2.calcHist([image], [0, 1, 2], None, [8, 8, 8], [0, 256, 0, 256, 0, 256])
#features = cv2.normalize(hist, hist).flatten()
#print(hist.shape)
#print(features.shape)
#hist = hist.flatten()
#print(hist.shape)
#print(hist)
#print(features)
'''
import argparse
import cv2
 
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required = True, help = "Path to the image")
args = vars(ap.parse_args())
 
image = cv2.imread(args["image"])
 
cv2.imshow("image", image)
cv2.waitKey(0)
'''
