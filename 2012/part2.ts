import { LinkedList, Node } from "../utils/linked-list.js";

const sampleInput = `1
2
-3
3
-2
0
4`;

const input = `5602
9939
7502
-7162
-8449
-6157
8518
-467
-1389
509
6834
-8896
44
-4782
-5921
3499
9837
-5056
9570
2172
1386
-1028
1019
-4235
3361
-582
3291
1646
-708
7055
3791
8596
-8357
8034
-3063
-6657
-8499
6940
8205
8264
8081
-6891
-4639
4194
-6747
-8689
-5757
-9613
-9422
3591
6136
-5616
6254
2195
1191
3845
7235
4676
-3869
3551
781
8419
-4569
-353
-5224
6438
4046
154
2336
-2486
-4608
6002
5888
2772
-3023
-183
6163
-9139
9939
-4956
4642
-280
9214
6718
1879
7249
-3069
7735
-2548
3905
-1275
-5817
542
-8935
-9933
-6605
-5117
1744
5857
-32
-8559
6898
6689
8929
8864
1924
5338
-3672
-8981
3408
5907
-8432
-1901
-2938
-7002
-4010
4506
-5633
4465
-5485
-1708
-1946
8196
1090
-1901
2912
3143
-74
1983
1263
-5193
7396
-2865
681
-5580
-350
376
1027
9845
-6794
8485
-4190
-6962
8038
6909
4660
1239
2214
1673
5167
5624
-6694
2622
-8039
5602
3465
717
-7256
8954
9355
-3927
460
-7790
-3513
-9258
-2199
-4370
3416
-2381
1337
9094
-144
7301
1700
-6655
7354
-3708
-7784
-2890
-8677
4749
6226
-2055
75
2027
9253
-1101
-8217
5297
999
8032
5246
1404
-9020
-9779
-7144
6890
3738
-4131
3118
-3095
-7282
8223
2251
9342
5853
3800
6497
-7131
1406
2126
-5631
-4633
5496
9914
2394
-8921
4558
-510
-3682
2251
2055
3784
9959
-7083
-2919
-5108
1609
-8438
5826
2011
-1275
7432
-9240
1622
8689
846
-7731
9630
9002
-1231
3744
7882
-4426
-7148
-928
1585
-9554
9770
2575
-439
1412
8981
-4030
-7991
4734
5368
-6600
7392
-6309
-7362
-5327
-1334
5300
-1547
-2907
9295
-2818
9063
6176
-2477
-8900
-6585
-531
8289
7
1736
-8238
-1894
6167
357
-956
7215
1818
6611
-8708
2612
6233
6174
-368
-6893
2082
4884
-9968
3119
9608
6422
-3469
-8828
7461
9938
9422
-8489
1412
-8319
1924
-3877
-1551
7947
9888
-7453
-9579
-8342
2255
-2075
-5397
-1285
-3885
751
-8805
-7860
-5344
-6833
6074
-4236
-7640
-4146
-392
-8016
-7575
-9381
-6513
-7203
-3491
3073
-2217
-9049
1925
-422
1482
8739
2147
1636
-8549
-7046
6919
-5722
-363
3677
-2952
4802
5889
-2525
5201
7522
-4425
-1162
-2249
3197
2627
3175
2214
9094
4541
9280
-2028
-3955
217
5866
-9993
2575
-4873
1586
-1045
-2640
-6879
-6958
-534
-2312
-3690
5673
-2596
-9042
8525
-8331
6918
-5284
-9636
5206
2131
-1633
-3408
-1096
-4883
-2020
-5063
-166
-41
1367
6863
-8943
9436
-124
1151
3815
-2986
-1964
-8074
7021
-6068
8572
5897
2988
-6936
50
5191
3504
1737
-7183
-9211
-3070
8186
-6404
6586
1739
-3310
8596
7030
4361
-9066
9442
412
9113
8980
-7657
9966
1904
-3158
-2869
-4737
-4680
6559
9179
7158
-94
2980
-7061
1488
4871
4532
8657
6691
6131
9094
7907
1702
-2821
-9111
-3497
9449
1011
-3102
3478
-4608
-6476
8401
5388
4136
-4886
-3782
544
5949
-3090
3063
-1946
1639
5675
6112
39
9599
-3264
4093
-3672
5614
-4028
3586
-8325
-877
-9725
581
-9012
-3335
-7378
7774
-1807
595
-3200
7765
3536
-363
-4653
9050
-6137
-6413
-6404
3261
6122
5582
-2067
7128
7988
-3699
-3051
8371
321
7200
-2690
-1051
-2858
-9895
-9739
-5943
3831
-510
-8510
-275
5475
6872
-3296
6226
4985
-9850
2661
689
-884
-726
1641
-5359
-8824
5007
-9870
-9548
-4596
-4601
-7881
-4455
-4614
-4451
-2318
-6074
-8023
-7203
7896
-7756
2163
-4464
9611
1690
-9042
-4510
-416
7522
3847
-7677
8922
-2845
-3551
-2124
6424
2240
-8472
-9757
-2997
154
223
3068
-2412
-3090
8236
7048
-5853
9574
-3229
4304
5582
-2905
-2371
-3416
455
9685
8276
1132
-2499
1527
6367
-7325
-8432
-7339
-1761
-9016
-365
964
-1722
-3331
-5013
5909
-9746
-359
17
-7344
-7183
-1981
-7974
-7404
7294
5647
9188
3317
-4259
-8051
5193
1701
3915
-9042
-4745
-6352
-3756
-1994
-4270
5232
5619
1631
6898
-4811
-5131
5692
-9303
-2843
4519
9152
9676
-6160
-5335
-2715
9121
643
9412
2766
-1680
2430
2175
-8844
-1198
6907
5717
-7067
-4504
-6842
244
-2396
-9630
-686
-7640
-4648
8312
1029
8003
5925
6302
4353
6726
7832
2668
2530
-6107
-8973
3699
-5400
-5535
9348
76
1656
651
-2501
-1257
-7113
6476
4285
9289
-3521
6858
2963
5080
-3999
-5049
1670
-8454
6424
1172
-8003
-7975
3175
-8011
717
3730
7100
1617
1737
-2445
1774
7046
7344
4943
-105
-3491
-6891
-5935
5043
-7382
5861
-9579
6772
9922
-3797
5874
3775
9155
-2430
5934
-1484
-5749
5832
-8431
2481
-2762
4867
3338
4752
827
-8051
-1484
9676
-3684
7447
-5180
2583
7376
4400
-2029
-3102
-7076
1715
-7596
-290
1823
-8282
-6914
-846
-2851
-6035
-9463
-3229
9151
-1957
-1078
9355
-183
-3159
5988
-6107
-8112
1803
4974
3890
1412
-9710
6111
-2371
-4378
8378
-7498
1617
-9206
-3768
-3217
-2198
135
-6373
-2574
-5583
9589
8867
-7038
-332
-2113
-5155
1891
-9959
-421
7569
-7543
-996
-5002
7730
5738
-4734
2977
-1445
-8071
9923
-7156
-141
2814
-1015
1108
5272
-6371
589
9641
-14
-9688
3260
7780
8815
9906
-390
-4590
-6892
6111
8276
-6021
-8767
9799
589
-9617
9314
-8305
1736
4428
9851
-5946
3921
-814
9080
481
-8807
6647
5888
-1951
6039
8747
4303
-8563
6767
2878
6767
-4452
6664
7051
9766
5128
-1281
-1121
-3488
-2198
-6432
-2533
5356
9890
-996
-3178
5729
-7640
7988
8247
-7633
5851
717
-2632
2518
-3082
5339
-4083
7765
4888
1852
-1361
9125
-7316
-3578
6227
-454
7450
-7387
-7877
8632
6196
0
-3651
-2698
9840
-8655
8186
-1321
-1197
-1793
-4343
4008
6770
2496
5375
70
9080
-2727
-858
1094
-6438
6234
75
-750
9450
1602
-2004
-6037
7373
-98
8187
-7824
-8738
-5830
7569
544
-6755
-1796
1844
4704
1024
4432
3847
5876
6252
-4353
5636
8957
-6740
-9100
8335
3840
510
8380
4687
-3847
2081
-9514
-5913
5628
5471
-9759
515
6396
-6995
9594
-2326
-9846
8003
-7877
-3050
7331
-1210
2548
-4727
8860
-2665
8366
2940
4784
-69
-4579
4327
2609
-714
721
-344
-9742
-7066
-598
-2316
3769
-7191
7452
6303
-1198
-3153
1591
5259
1030
-2876
-7327
6282
8274
5858
927
4367
-8820
-4809
2977
8017
-9084
-9757
9481
56
-1475
-167
1064
1679
-1795
9874
5186
-5049
-4028
-8100
-8062
-6766
3307
9552
-7365
-6582
9853
1800
6051
-1015
7344
-3090
-4406
7606
5530
3704
-8807
2077
9858
-2538
-7945
5968
-8438
-7500
-9346
-2571
6600
-3398
-4406
4753
2442
8938
9139
-1231
-1174
-9936
6436
8739
-4066
2025
-5787
2251
9940
-359
-9460
153
-7491
3704
4694
4852
-4322
-4029
-9630
594
5511
-2266
-2840
-2241
-229
780
5456
7229
4303
-2662
3325
4305
6972
5418
722
-250
6047
-491
681
2246
-4131
3050
-1277
4859
-986
-4106
-5442
5389
1693
-9066
3519
2194
4604
-5312
2126
-6340
-6455
8076
2178
4267
4933
9170
3065
-5582
-9548
4615
-9696
-8171
1686
1591
-5826
4350
9307
7579
4920
-6953
-1032
-9612
4976
-21
-603
-4548
-9968
-3589
4024
2416
-5661
1496
-2199
-5726
3141
8441
6756
-752
9071
-4321
-9439
229
1040
8380
5226
6047
-5543
6797
-3634
2183
481
7955
-9376
9348
-2892
-7600
-5999
-2785
-3302
-3290
-9247
2079
-6254
-5165
4012
643
1242
-8550
-4404
715
-6838
-473
3197
1983
4982
2713
-1820
7249
-921
2560
-2919
7095
-8677
4766
1120
-6063
3360
292
4506
-2029
9563
-6893
-6519
1988
6008
8815
1532
-8835
1511
6501
-7855
-68
-1666
6107
8911
2991
6300
5833
-4653
-5000
6110
-1084
-6373
3280
-69
5888
-157
1999
1827
-7633
-3880
-2625
9637
-7002
9870
-1884
-3782
2106
-2638
-5976
-7644
-8468
-8958
-2960
1216
2531
-6542
1585
6369
8551
7955
-5433
-3410
9696
-7015
8154
8717
7781
8591
-8850
-2080
-9490
-9613
-8877
9762
725
-5473
-251
-3178
4414
2621
4892
2336
6047
-6547
-1485
8877
-1566
5624
-1294
-4295
-6947
-907
-6219
-3950
-384
-9446
-1053
6370
4208
-1589
8888
642
-3513
2897
-2445
1966
-2404
-8171
801
-848
591
-5569
-418
1458
-8072
-9042
-4447
4646
-66
-3888
-2922
9389
2645
7331
-4097
-5854
-4545
3080
-8211
3255
9370
6390
-8633
-1215
-7720
4046
1024
969
-5223
9412
-4866
-2098
1907
-8240
4088
-900
9270
-359
-4974
5066
6100
-2006
-4864
-245
-5222
1932
2293
-3455
4137
-4473
-7920
8210
-7651
7579
953
-5077
-7131
-8347
8046
1048
465
3918
-663
-3219
6416
9519
-985
-8499
2634
-2637
8966
-465
-9638
-6445
-7820
2293
2963
-7203
-4179
6509
-1214
6227
2387
-2020
-3477
5949
-6539
-7235
3041
9598
-4574
7359
5487
2004
-2088
4513
3611
6305
-3264
3719
7523
-6877
-1720
591
2240
3044
-5768
3677
364
-4680
9031
-5131
-2231
5777
3773
-5111
8888
-1704
-575
9253
-8260
3244
7029
4539
6247
9058
7753
-2546
2163
7524
-6976
5128
6806
-8238
6741
4999
7761
-9283
-9735
4750
6007
-6213
-6508
-9523
-9283
9882
-5222
5531
-422
-6309
-684
-4929
-6715
8469
-5518
5230
1077
-7860
8020
-1285
7696
2194
-2412
291
-7589
4580
5626
-5855
6128
1904
2548
-7889
-9056
1243
-5579
-6433
-8719
9153
5567
-9061
4513
-699
-9423
2905
2114
3839
-4500
-6711
5082
6831
-2662
1621
-3063
-5850
1460
-3647
-1687
1496
-5617
2838
-2877
-5207
6896
-6833
9845
8575
9940
-5222
4263
-9379
3820
-9299
-810
-7796
-7113
1337
3140
7582
7006
3607
-243
-1936
-5027
-6494
1774
9794
1021
9870
1705
-4029
9282
-727
9229
6789
-9772
6977
5807
9374
-6363
-8790
4556
7308
-1434
7896
7048
-800
-7083
6856
903
-6185
2698
-5353
-6032
4949
18
-594
-4577
-6683
-230
693
6011
8759
2511
-6758
5292
651
-1357
-8175
5743
-4479
3510
-4577
-2229
1702
-4877
9174
-5063
5266
8722
-1687
1154
1004
1586
3921
6105
-4569
268
4250
-632
-2790
-1410
8789
5077
2736
-8894
364
4187
1992
510
3354
3880
655
714
-7860
-8773
3950
606
-2464
-4343
-6900
9151
10000
-1025
-3997
-7583
9171
7824
-1657
1307
1121
-3061
-9447
-6022
-141
321
-9509
-8420
-7008
4150
3592
-6552
9445
7633
6664
5160
-3104
3200
-6752
-9241
-5088
-1410
-6586
-2710
6901
5043
9905
-9563
-9956
-9799
-9651
2447
-2159
-2727
346
-6900
-2412
-1094
8572
-68
-395
-6818
-3472
6859
-6433
9036
6931
9784
5687
8274
-390
-119
-2575
581
-5389
7878
5201
9630
3572
-3511
-7061
-4808
-467
-5131
-5980
1924
-2972
1803
-1982
2856
-5533
-1205
-3082
-2755
4667
-1480
7822
3200
-9446
-2504
-2934
6918
-4976
4630
-7431
-4727
-7886
-8347
2121
-67
-3192
-1566
9413
-4510
-3396
4102
-8893
4139
-6561
8082
-2435
6302
-5172
7868
-9134
-8155
4063
9171
-5530
-8851
-9954
-7674
-9655
2394
4416
-1302
2231
9315
4303
6112
-9977
8829
5876
-2687
-5722
-3625
-6107
4630
3216
8491
-6213
-2188
7332
1974
2515
1466
-5128
2740
3256
-4745
1942
-9689
-7813
-2271
7186
6804
-7113
-439
9643
-213
-6640
5654
5496
-658
8511
4892
-350
-9363
6976
-8992
7723
-7988
-1534
-2504
9892
-6086
7901
5679
-5962
7874
711
9495
-1063
6433
758
4591
800
-4734
2522
4368
-1205
7629
-7867
3302
7701
8657
4092
3570
-8255
8585
2567
9373
-1205
2846
4416
-3217
9958
7737
3878
-1104
8724
5652
-578
-8076
2531
5727
-5826
-9258
24
7327
6936
22
-4490
-603
8748
-7936
1565
859
-545
8141
3568
7940
9349
-884
-6973
-1073
-5568
-6829
491
-2371
-7181
-5612
2624
-9678
5063
5493
-1503
7854
6353
-3335
9348
-1159
7479
5896
7523
-8891
-5927
-5059
3495
1496
-4479
-3943
6928
476
9565
2705
8415
9436
438
1432
2255
-689
8720
-1941
9886
2855
2211
6558
-1197
1940
7522
-2504
-1370
6118
2212
-881
1751
3592
-1797
4845
780
-8087
4607
-2392
-2240
5050
-3427
6915
-4116
-1887
-2269
8531
6702
-2923
-6653
-6420
-4029
4150
-2709
5118
-3022
-9200
292
9962
-473
-6318
-7480
-5726
3608
8195
-9424
5329
-5323
2005
9837
-7501
-421
9801
1602
-2335
7249
-585
-3885
8700
589
7954
-1744
-3251
8959
8430
8082
9411
205
9459
-7377
-6138
8855
2410
-3783
-1084
7415
-2006
1354
5070
-6640
-9777
1019
-410
2947
-4485
3874
4808
-2728
-1285
-6074
5990
4361
4406
-2383
9936
-7488
1364
-2198
-7935
-8031
5683
9000
2615
-6866
-6748
-1455
-301
-712
-2550
-2322
9750
3677
-5101
-6185
9983
5622
-517
3361
6608
6714
8860
4940
-4869
3485
-8571
8377
7172
1465
-8761
3128
-6833
7868
-7710
-3672
-3076
5034
1335
-4842
1693
6196
-6884
-2693
-8076
2098
6210
9677
-610
-183
-9919
5700
-1424
-4970
-6888
-2275
-5899
9385
1988
-3615
1047
2851
-3708
2473
2657
-5656
606
67
-8671
-2448
7406
2214
6811
1528
1337
4350
-5145
-5473
-5530
-6219
4986
-7055
9067
1518
-6775
624
-8621
8078
362
-2727
5344
-1707
-8655
-7236
-5161
-3134
-9696
-4121
1737
3252
-365
-3373
-4005
5708
-4967
1894
7479
7950
-8943
-1826
6465
257
9683
-5335
7223
-4495
-9648
-4631
-5564
-1107
-4386
-5023
-9605
-9181
-3706
-1325
5464
-3229
-6824
-1244
-5898
8934
4593
2794
4751
1252
6890
-2070
-542
3519
7677
-7197
-3503
7373
1200
-5512
3561
7196
-8678
-6756
-2999
6623
2707
7949
-8844
-726
-3894
-5111
-1877
3003
-6074
109
9758
1043
2388
-4608
-7055
5032
8381
9698
8184
-77
-8178
2698
3661
-1882
7528
6367
-258
2470
-7794
4695
-5865
4295
-194
-5379
2140
-3371
-7921
3764
-946
-250
-9181
-4746
507
1702
6266
4132
-6534
-8000
3105
-7258
-5504
2121
-9153
-8838
7988
4416
5400
-5400
-2179
7772
-542
-6183
-8938
-9489
-3472
6880
-5312
4051
-9172
4444
-9064
7759
9633
-1157
1123
-4240
1230
-332
6958
855
-5555
-8542
5407
-6586
-4300
905
9819
-453
-8774
-2727
7528
2236
-3956
2943
5197
87
-3483
-4760
8636
-1200
-5648
-6407
-7815
310
8053
4917
-3674
7069
-8724
5354
-3061
1098
-4524
734
-2665
8321
233
3214
7757
-5920
8789
-5519
3194
-5262
1003
-2316
-2573
5211
879
8020
6815
-3415
-1676
1876
-2130
3836
-8331
-9159
1330
8235
-7651
6802
-4606
6234
-8854
-6651
2559
-3178
-2008
2467
-4843
5528
-4711
-5799
-5214
-219
2398
1398
5475
6697
6924
7016
8660
7295
-7281
-7835
8283
669
4346
2675
6237
-6062
3496
3354
-4708
-5340
-4971
8580
7798
1437
-1094
8136
6764
2486
8585
-3157
-3190
2960
9370
9929
-1023
-1948
-5964
-491
4700
-1386
-1831
-1761
-8209
7149
6856
-4954
-8995
4373
-3051
6236
1846
4206
4198
-2923
-4554
3395
-5364
-5660
3132
-5726
4672
2251
3033
-7936
35
1
4668
-2125
257
7294
-6183
1934
-6048
-6185
6756
6245
6934
4920
7041
1999
-4497
2925
9837
1662
-3215
9673
-5903
-5205
2778
9802
-4784
1484
-1947
-77
-4734
1914
56
-6243
-598
-2254
2730
-556
-695
8490
-8970
2674
-3839
7725
-2548
-4485
-4915
-4153
6236
8340
-5447
4701
-9508
9650
-9953
7415
9174
1983
7715
-7516
-4630
-2020
-1859
-4094
3076
-2510
-2790
-9232
9712
-253
6763
-2250
6540
2240
5717
-9984
-1795
-2373
-5244
2981
-3214
7831
-6833
-3723
-7903
-9942
-9611
9694
1109
2118
35
8953
-7842
-9277
-575
-6329
9342
-4244
-7560
-3361
7584
-9972
9568
4702
775
-8711
-298
-6432
18
5192
-2538
1220
5465
-9375
-7651
7009
-1967
6159
-8577
-8925
15
-21
-1616
-8043
-5571
-5998
-7607
-5783
-846
-9282
-1292
6558
7093
-8512
4548
-6285
-6144
-2543
3677
-1205
7172
5214
-4733
8272
-5172
-9455
4610
-5442
2473
-5502
8992
-6171
7280
7796
1891
-8051
1685
-1094
-8108
8706
2655
-2300
2213
3783
3113
624
-622
-8550
-7972
-3615
1615
7711
-3622
-998
-8356
8458
-4593
5080
-7843
-9620
1777
-5159
1461
-3590
-9426
3465
-8225
9885
8131
9868
-8333
-5971
956
4556
2737
-7203
-6766
-8827
3770
1584
9008
-1834
-5451
9170
-2004
6047
3080
-2248
7635
4939
311
6119
509
-2075
-6450
1624
-6903
-4384
-3248
9611
1532
-3156
-7668
-6111
5683
-7972
3132
-5593
-2525
-9049
-5684
8575
1067
1676
-7874
-7178
-391
-7674
-4029
3677
8860
-5576
6856
8423
8321
-8885
9231
-627
2529
-3817
9973
-1685
-9696
4765
-7327
-3114
278
-3711
-3214
-311
9137
-5207
974
8384
-6640
-3930
475
-8107
3430
-5433
-4521
-7640
-6473
777
-2915
-7813
8683
2532
-1586
1937
-531
-3992
-2727
-8264
-3568
-8238
4613
-7084
9296
1725
-2134
2766
5511
7198
-5913
-3410
8412
1403
611
-4873
8132
6870
595
-5468
-1160
-626
3131
-5433
-4687
1440
5266
-4266
-7200
-5768
-5631
8086
689
-9729
5885
8283
5718
-6974
-2533
5620
4575
-1845
-8711
-3401
-9218
-6794
-5569
-2632
164
2874
-9384
-1556
-6612
8547
-4066
4238
-8443
-5662
2579
-626
-8237
2183
-8146
4925
-5825
1581
5266
7186
-7983
9762
-286
4003
-2226
7723
-7386
7174
3869
-8064
-2972
2697
-9585
-3847
4295
6061
-395
-1292
4076
-137
-9566
-9848
-2328
-9857
6991
-8656
2449
-9699
3033
7249
-183
1149
4676
-4869
-8260
5045
4026
-8193
-8499
-7508
-3984
2612
-3041
4814
-3336
8800
-4284
-836
-4695
6
1123
4749
1247
5654
-5144
1788
-1015
5356
-280
-6905
3211
581
-4593
-4633
-496
581
4734
9153
3385
-6182
-8225
-1247
-6181
4134
998
-9572
-7938
-2791
-1535
-9225
2609
-9907
-5098
-247
-7282
-7046
-7061
-6936
-342
9694
-3930
-3310
-6107
9230
3482
-9696
-357
-4838
4305
4261
8342
-3229
-7223
-3974
-4574
-1407
-8313
2786
2365
-3488
-8335
-5580
-7812
-1972
638
-9977
8850
9896
4778
4561
-5301
-2225
6048
-6311
-3803
-5693
-8751
6208
-7999
-9634
5465
-2519
-5799
7049
-8748
9497
1367
-6318
-2938
9888
5293
7311
3783
8141
969
7952
-9807
-6756
8062
-377
7027
4017
-1326
31
9067
-4977
-2045
5832
3703
4698
4295
-655
-6239
159
9466
8931
-7185
-6032
-7573
4488
-8863
8860
-9748
-6703
5358
-4104
7327
2456
7686
-3277
-5927
9312
1666
753
9758
8496
-9962
-2464
3020
-2915
5581
8325
-8761
6119
9130
-4625
-1023
447
4611
8237
-6271
-2810
-4374
-2269
6617
-1668
-3726
1172
-7455
-1304
9862
6455
-2349
2661
-674
-3602
-79
5494
-4438
159
-280
-7099
3130
4717
-2096
-4240
-9143
-3178
1030
-5435
5844
6907
-6588
-8622
4483
5066
-3740
-1182
6842
4523
-6420
5448
-8236
7715
8518
-238
-9578
6501
-4244
-2920
-8010
1487
5192
-9604
2513
6677
1988
-7024
-1174
-9400
1352
7006
2077
-2027
3051
-2944
1337
1007
1317
9466
3309
-262
2698
8020
3113
9348
-7031
-9630
-7257
4104
-2499
3811
-6360
8422
-641
-9630
-8761
6356
4303
7158
7522
-2509
-6435
-3361
-7284
-4630
7981
3457
-846
6156
-3442
1629
4347
-702
1029
-3992
-262
-2354
840
9004
6028
717
2746
-3217
1670
9643
-8898
-4838
9195
1891
2981
7933
4821
772
-7555
234
6886
7203
-436
9008
6985
6830
-9187
-66
7331
3272
-911
2950
-651
-5854
4604
-4956
2111
8156
353
-8613
-5175
3383
-6372
1740
4541
2158
-2632
754
510
7247
2299
-9382
5808
3659
-1797
1035
7998
5682
8305
4390
1172
-2362
-933
-5063
-8454
-4218
-7251
-2997
-1849
3794
-195
-5799
-5697
-6352
127
-7994
9047
-1987
-5145
-5755
1511
6767
-1448
4989
7246
2229
3886
4327
-7547
7318
7415
607
4884
9462
4698
6388
-9447
8968
-2322
-1547
5492
-4362
-7247
1172
-5622
3978
8779
5186
9553
7089
-743
-7397
9206
7981
2594
9688
7267
9068
-6308
-6509
7064
-4378
-6752
-7244
-9483
5404
-2778
-8190
9394
8011
9347
-1824
-3551
4210
-1198
-2952
-9863
-5299
6156
5130
-7114
-4710
1862
6877
6159
-8112
3196
-2960
1894
-9857
-2198
-8100
-7882
4304
5193
3877
8954
-5985
-8101
-6678
5919
-3752
-2429
8143
2828
-1142
-3088
4782
-5144
-2801
5990
1021
-7235
-2641
5929
5838
-9258
-8022
7922
7417
-3177
7008
7735
561
-9027
-8989
-2371
-8790
-5921
714
8763
8423
-7405
8566
1090
-3937
-160
-9832
5570
-1284
9360
-2859
8044
1715
-7466
1680
3050
6595
2985
5870
8744
8252
3580
-928
-1294
5910
-6487
-7640
1784
4894
-4650
-1019
-9258
2367
4527
-6137
-3959
-6984
-9774
9167
-8824
-4163
5192
4698
7225
7174
249
-7017
-3200
475
6976
-4397
581
-7516
5280
593
203
-616
-1049
-7412
-6997
-8106
-4967
-974
-8499
654
31
8335
-6159
1548
-2477
-8776
885
-7815
-3836
-1403
-2925
-8854
9056
-9067
-9298
9017
-3981
-9684
6259
9620
4994
-6355
-1996
9444
-4907
-7855
1525
-4829
2518
-686
-6877
-8891
1361
-6322
7819
908
-1809
974
-3344
-3410
8722
4294
6013
-9613
-9103
1642
1870
537
-3741
-6994
-1154
-9568
6
5942
-3240
1398
-6366
2274
288
5654
-8072
-7061
-1160
9959
6689
-4031
8047
-7491
1434
-7797
-2174
-1198
5909
-9153
-9096
5342
6559
-8278
-2849
-2280
-6202
6920
8430
-8068
-1817
-8606
3459
8607
-1826
-6185
3394
-6600
2982
1341
3479
7294
-843
-7416
6047
-2225
-112
-2728
9230
-7972
-7284
-2257
-1466
-5027
6472
-5425
-8569
2557
-2857
-1563
3050
2456
9382
-9548
-7271
-3379
8428
-2297
-263
9880
2328
-7094
4404
-7640
-2742
8892
-8955
1367
-5229
-6007
-2631
-7875
4534
-4226
3567
-665
9620
4139
556
8360
2456
2183
-5612
3700
9845
-4455
2313
-7300
927
-7867
8791
-4121
-9366
7881
1460
7737
4580
9544
5754
-7038
1774
9252
8775
-146
-6369
491
8934
5387
-852
-243
7730
4554
4892
1624
9929
-6316
-8924
-810
5849
-9676
-2982
-1893
1367
1702
-4320
4727
1025
643
-7565
4817
-5410
-6639
8822
-2842
1658
2740
-921
5480
640
-2046
8132
9123
6390
-7055
-4407
7157
583
2374
9767
8199
-7466
-4590
2278
4730
-4719
362
-4404
9902
3976
2480
7200
-4763
-6157
-9082
636
6205
-7022
-4394
5968
-214
-314
-4329
1429
-8024
-6766
4404
-1115
9030
-1326
-957
-1916
-1198
1715
-7466
-8420
4250
7418
811
1330
-3602
-5592
3706
8368
8338
-4713
-8182
-4250
-6703
9252
-110
569
2290
1519
6622
-5852
-842
2327
3631
6247
-6044
3303
-3214
9241
-7668
-6638
-2566
-6794
-7114
6677
3129
-8542
3480
-422
9641
9465
-2915
9020
8819
5789
2022
-444
2183
-5473
9752
-7057
-5803
8908
-8139
3856
-1576
-3226
-4087
6495
207
-2972
3957
-1273
-5059
35
6534
-5335
-817
-6352
-1503
-5905
2920
-8171
9314
-5465
1942
4008
8257
-2225
-3927
7154
7200
-1504
-1799
6983
-5158
-2613
6758
3113
-5400
-7184
-5799
8435
4128
-8073
2830
7
-5530
1067
7060
2185
-4932
-9298
-2737
1736
-2567
-3357
-2756
4701
-2486
4411
1836
9083
7160
5329
6408
7743
6390
6334
-7293
-4276
-418
-9984
2938
2921
8706
4373
-2430
2614
-146
6188
-9458
2527
8778
-7190
-1843
-2575
-8043
-4322
4821
-6769
-9087
9389
3545
4881
-5460
-2199
33
-8339
7060
6252
8392
-3402
-2756
-6404
-77
5936
-2624
-9446
-1015
-1984
905
-12
-8948
-2225
7711
-384
-6720
2442
-1352
9947
5971
-3901
1246
1629
4527
-9035
9144
3041
-8431
-1133
-2197
8559
-719
-5868
-1972
5492
4088
8744
-3157
5201
-8277
2251
-8117
-7430
-6715
-6334
-6450
-3146
7762
6311
6589
6513
4800
-3431
8774
4177
-5197
-7973
6765
-8023
-391
-2788
5614
1019
-9646
-1852
-2727
-518
-6420
1098
-1053
5508
4480
-3965
2748
4526
-8859
4881
9348
5801
643
9218
-1576
-6992
-1151
-5531
-6588
1620
-6343
4951
9791
1247
-3138
9832
-1849
-4790
7994
-4510
9399
-4954
-412
-7657
8896
-375
9553
8447
-5818
-2536
-4841
-4665
3661
7554
9838
-3399
-7460
5619
-9714
6995
4674
-6189
-4625
5858
-4574
5568
-5059
3367
-6467
-4635
-7061
-3135
-6694
3113
-1829
1120
-258
-4822
2054
-1445
-5837
-4483
4137
2767
-4294
-4932
-1779
-6137
-603
-3733
-553
8668
-3041
4658
-4230
-58
-9127
-2936
4790
-2972
3524
4031
8932
7931
1555
-1929
-8741
-2118
-2857
-992
642
-1494
2963
-3817
7497
1346
4626
7852
9174
9703
-8838
-8155
1893
8599
1606
6564
9539
-9075
7582
-6780
1375
7350
-1001
3202
3631
1371
-8498
9375
8078
-6046
-9742
-5052
-5465
1284
5533
5789
-5923
-9147
-6552
9584
-8171
6188
-2198
-8033
-5115
-1817
-6842
-9936
-2486
-1389
-4712
-247
-550
-8299
-673
-4147
3396
-5855
4190
-9709
2036
1890
-15
1594
-4110
7458
4875
-1807
-3980
-363
-9123
1907
2981
1779
-492
-1335
-9537
7859
948
-2860
-4590
6054
8419
5492
9994
-9049
-8992
-9153
-6185
-1293
678
-6850
-8026
-6219
-8815
-4083
3640
4402
7145
6119
-8906
6871
-1785
453
9051
8711
-4760
3297
1779
-1415
5941
-7119
-4322
8860
2649
-3562
6656
-4746
-2056
6111
-6896
-2846
1998
-3061
-4971
-9204
-6715
7423
6137
-984
-8283
-1047
472
-1463
4234
-7181
-375
8744
2385
-392
4527
3176
6983
5998
-6053
-1031
-601
-8347
7198
-835
4667
-2318
-6877
-3770
-6347
2583
-520
-7644
-1400
6205
-9087
-2006
5536
-5325
-2589
9317
-3917
-3239
-9942
-7104
-5894
5211
-7307
-9796
6714
9084
2950
7215
6934
1248
6586
-2147
4298
-4026
-4407
-9159
3949
5495
-2760
2155
5689
-7644
9566
3196
-5058
4953
2313
-5496
-7785
1418
9676
-3895
-7156
-4745
-2199
-2288
7842
-9756
5972
9543
5919
1741
4350
8518
9438
-1680
-8656
-6558
-2082
6451
6233
-8237
5642
-6091
-7203
-8521
-1505
-5962
1406
-3119
-1161
-208
1688
-575
-2201
-4923
-527
8366
-1381
-7934
3132
640
207
9784
2740
-897
2306
5668
-4276
-3314
-82
3289
6410
7249
-2708
-9356
9514
1519
-686
683
7998
-5504
98
-2755
8624
6608
4143
-3041
-424
-4244
-8175
-7691
-925
-4479
1021
9922
9848
-3215
-2679
678
1724
-5389
-6397
9519
-2271
5140
-3301
-4606
-2629
-6756
8747
-6828
-208
9489
-8656
-7327
9819
-3267
7328
2569
7389
-7498
5941
-8954
2929
5281
1399
-4601
-114
-4614
-9937
-2960
-4887
-8437
6856
-1060
-4710
-4063
-8117
1406
5579
-9942
-1919
-6672
5107
9519
4803
1728
-4677
-9634
1823
4334
-6366
9056
7396
1531
6834
7150
-511
3017
1639
8335
9771
-1198
-4220
3532
8446
-8346
-1681
-3935
-3314
8895
-8596
-8333
9442
3132
5931
9696
5435
7785
4437
-6974
4250
-3192
-2574
3840
-6232
9956
-9705
-622
3301
-7657
-5252
-5708
2287
4350
-4969
8877
8830
-5364
6331
7027
-2365
1446
7244
1636
-4805
-6021
-8071
6802
-8101
-7344
4262
-71
-6866
-5772
4690
-348
-5250
2088
6531
-9695
-9042
-4524
1676
708
-9016
8414
-8075
-1231
9539
-4822
-7216
-3851
721
9835
1691
6674
-8976
9027
-6954
8689
-6411
-6741
3878
1828
4350
2219
8892
-136
-3654
-846
-7905
-5120
3117
5511
-420
1044
1782
2114
-7386
-1551
7136
4434
4524
-3926
-640
9342
2865
7819
2077
-8763
-1916
-3345
-5108
4274
1978
-7466
9948
-5176
-2869
-166
-41
1353
-440
-8649
-9425
-4614
2011
5631
-3310
-3623
-4510
-6517
-2810
-6271
4012
-2282
9705
6279
7868
-1749
-9075
4989
3338
436
-2419
2674
-8829
9845
6665
-3740
4102
8649
5090
2235
1882
-7554
-7905
8838
-2817
717
3676
-7695
9616
9444
1833
-9267
1169
-960
-391
1035
-622
-5525
-7407
6789
-312
-3368
-3926
9480
2655
-874
8706
-6127
-7644
7760
7331
2947
4113
-1739
1326
-7886
-7976
7029
3047
-8606
-7885
-313
-938
9582
9750
4506
8829
9148
3678
2416
9527
4521
4466
795
9639
8863
8279
5678
-7131
-1389
5126
-9036
-9517
9231
-8621
9771
-7543
6756
8122
7107
3338
2572
682
-1467
-2470
-9826
8354
-3839
7415
7668
-8011
5640
1064
3010
8343
-7350
9568
7154
6055
-2318
-7466
-6285
445
-7145
7992
6789
1169
-5452
3588
4044
-9548
-8333
9467
-8851
-4470
9694
-6099
-2464
2316
-5177
-5632
-8776
-9084
8559
-2241
5082
-8743
3132
9064
-5615
-3267
-1563
6576
-4808
1993
-8948
8354
-5209
-4479
6074
8712
-7303
7357
-7460
4700
-3026
-1750
-1872
8377
2278
-2771
9188
6099
-8028
-2625
-7511
-3296
119
8173
-7516
6909
-332
-6323
1445
9282
-9425
5839
-436
6530
-7196
7921
-7087
-6465
-8780
5219
613
4395
2238
-5809
2923
-6974
-1023
1751
-4590
-1223
5462
-3491
9462
-3970
-2528
-8201
-7642
-7534
-946
7257
-2737
1732
-1958
-4633
589
8235
-8684
9418
7126
7637
6910
1329
-5722
4595
-7303
348
7911
1766
-3722
-3291
-639
-1103
1794
-3582
9943
9393
-2577
-8489
8518
9902
7941
2278
-3464
-7083
7186
-5772
-9016
-9095
4374
-9849
1113
-1898
-2997
-3712
-6670
-1381
3794
-5530
1759
-8901
-7460
-4718
234
9540
-5077
-3041
8720
-2485
8863
-3813
2195
3156
-9768
-1782
-4777
-2071
7272
-8060
7522
-1526
8305
7117
3283
6806
-3993
-846
-1680
6859
-9098
4288
3126
8627
401
-5413
-2057
-6359
-6913
-6366
5266
-392
5709
-1813
6112
5945
2480
5041
-178
-9867
5896
-1094
-6925
7783
-7538
-6586
-3972
-289
4404
-6021
469
-1032
671
5916
1246
-8708
2240
1488
581
-6138
8943
-7
8436
-146
9652
4416
-1533
-7790
-6335
-8000
-1570
-9632
1542
-3315
3132
1
-9779
4881
9652
2602
5909
4035
-8795
-5783
-7850
-4861
7431
-7882
-4614
-960
9011
2055
-6756
4237
2194
-9866
6822
-6068
2854
-9995
-1532
9252
2555
-8235
3272
9611
6480
3895
-9422
5387
-9725
-5870
8959
6271
1060
-3959
-1812
8492
-7610
6859
-7992
8156
-1856
-3054
-4999
850
4999
-1326
8285
-4384
6112
-9446
-5784
-299
6135
-8472
-913
-434
-3000
-2562
-4431
8640
-3310
-5312
-262
-1134
5647
2088
-9634
2120
8199
-9277
4805
-810
5447
7289
9568
7304
-8060
-7964
6968
-5535
7524
-9763
1232
-167
-6486
6589
2236
-7491
-412
-5580
-7180
6480
5851
-706
6
-6023
8503
8585
3950
-9049
348
5531
9130
985
-2106
-5799
-2865
-5737
6758
-7491
-9747
-4906
8264
-584
645
-9755
8336
-3699
5126
6611
-7860
3267
4987
-8780
-3371
8949
4132
2624
-1750
4802
8640
-2536
2558
2522
2170
2331
-4163
2767
-6906
-2901
9054
-9777
-7183
7696
-2008
4790
-6153
7249
-384
2662
-7416
4472
-2445
4029
1220
5988
1165
-5231
-3842
-4133
-1420
-7885
8700
-6927
9776
5929
-3159
5972
-484
8401
-1241
-8925
-9464
-6224
-8226
-9423
-1281
6495
7524
260
-1812
-3022
9767
8082
498
-9579
-4139
3703
-2915
6360
2497
-9084
-5953
9754
826
-3022
-8391
643
4862
9771
-7336
-1321
-2818
7186
-2479
-8128
5201
-7695
-186
7781
1874
-1463
-8592
-8986
8240
-5259
7396
1894
-9839
-1052
-9548
8841
-473
-7534
-8863
-5849
-9522
-5028
3869
-8922
-8972
9902
9444
-3210
-3491
8522
8569
2595
2322
-9229
5193
-7659
5727
-980
5491
-4114
-5168
-3267
3744
-9514
7119
-8849
5896
-4843
-6220
-3177
-8649
9011
8302
8077
7822
-475
-4104
-7010
-5893
-5460
-3686
6535
-385
756
-5582
-9016
8585
1027
-1410
8086
1326
-9926
1289
6806
8898
-1617
-2972
2614
-1578
4869
6012
-9324
9802
5174
-7511
-9544
-3965
-5683
8506
-3802
-491
-6581
-5580
9382
-1570
8017
-5462
-5325
-1302
8369
-8948
-5631
8342
-3498
-7608
-4525
868
5192
-2062
-5815
5339
-3118
3524
-6105
-466
-6285
5404
-9343
-6103
-777
-6534
-6314
-995
905
-6328
-1323
-3681
4128
1552
8353
4404
4076
1225
5348
-6410
-1561`;

const array = input.split('\n').map((number: string) => +number);
const MULTIPLIER = 811589153;

const linkedList = new LinkedList();

for (let i = 0; i < array.length; i++) {
  linkedList.push(array[i] * MULTIPLIER);
}

const allNodes = linkedList.getAllNodes();

for (let i = 0; i < 10; i++) {
  allNodes.forEach((node: Node) => {
    node.move();
  });
}

const result = [1000, 2000, 3000].reduce((acc: number, nth: number) => {
  let nthAfterZeroNode = linkedList.getNodeWithValue(0);
  for (let i = 0; i < nth; i++) {
    nthAfterZeroNode = nthAfterZeroNode!.next as Node;
  }
  return acc+nthAfterZeroNode!.value;
}, 0);

console.log('end', {
  result
})

export {};