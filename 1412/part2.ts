const sampleInput = `498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;

const input = `519,81 -> 524,81
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
540,132 -> 540,133 -> 552,133 -> 552,132
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
547,139 -> 552,139
558,142 -> 563,142
501,24 -> 505,24
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
551,142 -> 556,142
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
507,20 -> 511,20
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
545,148 -> 550,148
522,104 -> 526,104
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
517,90 -> 522,90
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
538,148 -> 543,148
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
548,145 -> 553,145
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
528,108 -> 532,108
562,145 -> 567,145
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
495,24 -> 499,24
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
541,116 -> 541,117 -> 549,117 -> 549,116
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
501,20 -> 505,20
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
554,139 -> 559,139
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
541,116 -> 541,117 -> 549,117 -> 549,116
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
552,148 -> 557,148
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
523,84 -> 528,84
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
540,132 -> 540,133 -> 552,133 -> 552,132
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
540,132 -> 540,133 -> 552,133 -> 552,132
524,90 -> 529,90
544,142 -> 549,142
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
559,148 -> 564,148
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
507,24 -> 511,24
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
498,22 -> 502,22
525,106 -> 529,106
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
510,90 -> 515,90
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
494,14 -> 494,15 -> 505,15 -> 505,14
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
555,145 -> 560,145
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
494,14 -> 494,15 -> 505,15 -> 505,14
522,108 -> 526,108
494,14 -> 494,15 -> 505,15 -> 505,14
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
504,18 -> 508,18
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
519,106 -> 523,106
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
510,22 -> 514,22
513,24 -> 517,24
495,50 -> 495,40 -> 495,50 -> 497,50 -> 497,43 -> 497,50 -> 499,50 -> 499,43 -> 499,50 -> 501,50 -> 501,41 -> 501,50
499,53 -> 499,57 -> 491,57 -> 491,63 -> 513,63 -> 513,57 -> 505,57 -> 505,53
527,87 -> 532,87
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
514,93 -> 514,97 -> 506,97 -> 506,101 -> 523,101 -> 523,97 -> 518,97 -> 518,93
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
531,90 -> 536,90
504,22 -> 508,22
520,87 -> 525,87
530,130 -> 530,123 -> 530,130 -> 532,130 -> 532,126 -> 532,130 -> 534,130 -> 534,128 -> 534,130 -> 536,130 -> 536,123 -> 536,130 -> 538,130 -> 538,124 -> 538,130 -> 540,130 -> 540,126 -> 540,130 -> 542,130 -> 542,122 -> 542,130 -> 544,130 -> 544,127 -> 544,130 -> 546,130 -> 546,125 -> 546,130 -> 548,130 -> 548,125 -> 548,130
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
550,136 -> 555,136
528,112 -> 542,112
516,84 -> 521,84
516,108 -> 520,108
541,145 -> 546,145
541,116 -> 541,117 -> 549,117 -> 549,116
534,161 -> 534,157 -> 534,161 -> 536,161 -> 536,154 -> 536,161 -> 538,161 -> 538,156 -> 538,161 -> 540,161 -> 540,153 -> 540,161 -> 542,161 -> 542,151 -> 542,161 -> 544,161 -> 544,160 -> 544,161 -> 546,161 -> 546,156 -> 546,161 -> 548,161 -> 548,159 -> 548,161 -> 550,161 -> 550,159 -> 550,161 -> 552,161 -> 552,159 -> 552,161
551,164 -> 551,168 -> 546,168 -> 546,171 -> 556,171 -> 556,168 -> 555,168 -> 555,164
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
513,87 -> 518,87
512,66 -> 512,70 -> 505,70 -> 505,78 -> 521,78 -> 521,70 -> 516,70 -> 516,66
486,37 -> 486,34 -> 486,37 -> 488,37 -> 488,34 -> 488,37 -> 490,37 -> 490,28 -> 490,37 -> 492,37 -> 492,28 -> 492,37 -> 494,37 -> 494,30 -> 494,37 -> 496,37 -> 496,36 -> 496,37 -> 498,37 -> 498,36 -> 498,37
566,148 -> 571,148`;

const traces = input.split('\n');

let maxRow = -1;
let minRow = Number.POSITIVE_INFINITY;
let maxCol = -1;
let minCol = Number.POSITIVE_INFINITY;
let floorCord = -1;
const grid = [];

const findMaxBounds = () => {
  traces.forEach((trace: string) => {
    const lines = trace.split(' -> ');
    
    lines.forEach((line: string) => {
      const [col, row] = line.split(',').map((cord: string) => Number(cord));
      if (row > maxRow) {
        maxRow = row;
        floorCord = row + 2;
      }
      if (row < minRow) minRow = row;
      if (col > maxCol) maxCol = col;
      if (col < minCol) minCol = col;
    })
  });
  traces.push(`0,${floorCord} -> ${maxCol*2},${floorCord}`);
}

const createGrid = () => {
  for(var i: number = 0; i <= floorCord; i++) {
    grid.push([]);
    for(var j: number = 0; j <= maxCol*2; j++) {
      grid[i].push('.');
    }
  }
}

const drawRocks = () => {
  traces.forEach((trace: string) => {
    const lines = trace.split(' -> ');
    
    lines.forEach((line: string, index: number) => {
      const [col, row] = line.split(',').map((cord: string) => Number(cord));
      grid[row][col] = '#';
      if (index !== 0) {
        const [prevCol, prevRow] = lines[index - 1].split(',').map((cord: string) => Number(cord));
        
        if (row !== prevRow) {
          for (let i = Math.min(row, prevRow); i < Math.max(row, prevRow); i++) {
            grid[i][col] = '#';
          }
        }

        if (col !== prevCol) {
          for (let i = Math.min(col, prevCol); i < Math.max(col, prevCol); i++) {
            grid[row][i] = '#';
          }
        }
      }
    })
  });
}

const moveSand = (row: number, col: number): boolean => {
  if (grid[row + 1][col] === '.') {
    return moveSand(row + 1, col);
  } else if (grid[row + 1][col - 1] === '.') {
    return moveSand(row + 1, col - 1);
  } else if (grid[row + 1][col + 1] === '.') {
    return moveSand(row + 1, col + 1);
  } else {
    grid[row][col] = 'o';
    if (row === 0 && col === 500) {
      return true;
    } else {
      return false;
    }
  }
}

const drawCave = () => {
  const drawGrid = [];
  for (let row = 0, i = 0; row <= floorCord; row++, i++) {
    drawGrid.push([]);
    for (let col = 326, j = 0; col <= 677; col++, j++) {
      drawGrid[i].push(grid[row][col])
    }
  }
  drawGrid.forEach((row) => console.log(row.join('')));
}

findMaxBounds();
createGrid();
drawRocks();
drawCave();

let fallenOff = false;
let count = 0;

while (!fallenOff) {
  const result = moveSand(0, 500);
  if (result) {
    fallenOff = true;
    break;
  }
  count++;
}

drawCave();

console.log('end', {
  // falling out from left (minCol - 1)
  maxRow,
  minCol,

  // falling out from right (maxCol + 1)
  minRow,
  maxCol,
  count
})

export {};