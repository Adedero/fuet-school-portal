INSERT INTO school_session (id, name, start_year, end_year, current_year, is_current)
VALUES ('01K5E7T3YS8BWXZ33AWR9SYGJD', '2025/2026', 2025, 2026, 2025, 1);

INSERT INTO student_class (id, class_name, enrolment_year, current_level, is_active)
VALUES ('01K5E7T3YWFZ8M0JKRH1Q0D75Z', '2025/2026', 2025, 100, 1);

INSERT INTO semester (id, name, is_current)
VALUES 
  ('01K5E7T3YXEHZM7NEKSP1N8PY6', 'harmattan', 1), 
  ('01K5E7T3YXPGK96Z27WPFHXDHM', 'rain', 0);

INSERT INTO level (
  id, 
  name, 
  min_credit_units_harmattan, 
  max_credit_units_rain, 
  min_credit_units_rain, 
  max_credit_units_harmattan
)
VALUES ('01K5E7T3YXKYRBJJPJE4MSHEN1', 100, 18, 24, 20, 26);

INSERT INTO settings (
  id, 
  applications_open, 
  applications_open_at, 
  applications_closed_at, 
  course_registrations_open, 
  course_registrations_open_at,
  course_registrations_closed_at,
  admission_fee,
  admission_fee_payment_deadline
)
VALUES (
  '01K5E7T3YYGN4HY95YSD776ECV',
  1,
  1757481415,
  1762751815,
  1,
   1757481415,
  1762751815,
  65000,
  1762751815
);

INSERT INTO faculty (id, name, code)
VALUES
  ('01K5E7T3YYTV9YAMFMA4MDHXCV', 'School of Science', 'SCI'),
  ('01K5E7T3YYEBVX3W6DT11T2NNB', 'School of Engineering', 'ENG'),
  ('01K5E7T3YZZCGAQGRBDTG49KM8', 'School of Environmental Studies', 'ENV');


INSERT INTO department (id, name, code, faculty_id)
VALUES
  -- Faculty of Science
  ('01K5E7T3YZC9229CTPAWVGAZ05', 'Computer Science', 'CSC', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3YZ2JCMV0XQZF4B5PXV', 'Physics', 'PHY', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z06TJS0RZK8GZR1E59', 'Chemistry', 'CHM', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z0S5ZJDP8466T85YC3', 'Mathematics', 'MTH', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z0CXMBZZDW1WPPFFFP', 'Biology', 'BIO', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Faculty of Engineering
  ('01K5E7T3Z0N7M43AY947ND3HMY', 'Mechanical Engineering', 'MEE', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z0YJSV68CC53YC5J0P', 'Civil Engineering', 'CVE', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z1FFYBQ0WDJCWBV9AH', 'Electrical Engineering', 'EEE', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z1VFTX70VHSM7367N2', 'Chemical Engineering', 'CHE', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z11JW1ZY3D1109JJNF', 'Agricultural Engineering', 'AGE', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Faculty of Environmental Studies
  ('01K5E7T3Z1SXPWC68DZ9ME7PN3', 'Architecture', 'ARC', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z1ZFQ7W6PV6WEPE5SM', 'Urban and Regional Planning', 'URP', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z2Q833D75MY0EF4JQ7', 'Environmental Management', 'EMT', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z2S8V3HW5SR98YCTSW', 'Surveying and Geoinformatics', 'SVG', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z20HCABXJRAQH6PZSP', 'Estate Management', 'EST', '01K5E7T3YZZCGAQGRBDTG49KM8');



INSERT INTO course (id, semester, code, level, title, description, department_id, faculty_id)
VALUES
  -- Computer Science
  ('01K5E7T3Z61EA5YV801794ZT3D', 'harmattan', 'CSC101', 100, 'Introduction to Computer Science', 'Fundamentals of computing and algorithms', '01K5E7T3YZC9229CTPAWVGAZ05', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z60GJXED5MHSNCYWVJ', 'rain', 'CSC102', 100, 'Programming Fundamentals', 'Basic programming with C language', '01K5E7T3YZC9229CTPAWVGAZ05', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Physics
  ('01K5E7T3Z5P101BRJ21KTV7Y36', 'harmattan', 'PHY101', 100, 'General Physics I', 'Mechanics, heat and properties of matter', '01K5E7T3YZ2JCMV0XQZF4B5PXV', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z588SR9XMPMPQ05NWM', 'rain', 'PHY102', 100, 'General Physics II', 'Electricity, magnetism and modern physics', '01K5E7T3YZ2JCMV0XQZF4B5PXV', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Chemistry
  ('01K5E7T3Z5EMRG960AKWBRJ611', 'harmattan', 'CHM101', 100, 'General Chemistry I', 'Atomic structure, bonding, stoichiometry', '01K5E7T3Z06TJS0RZK8GZR1E59', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z45BTRTJQ4D2MHSWZR', 'rain', 'CHM102', 100, 'General Chemistry II', 'Thermochemistry, kinetics, equilibria', '01K5E7T3Z06TJS0RZK8GZR1E59', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Mathematics
  ('01K5E7T3Z48YWVEBP35VCSRCS8', 'harmattan', 'MTH101', 100, 'Algebra and Trigonometry', 'Basic algebra and trigonometry for science', '01K5E7T3Z0S5ZJDP8466T85YC3', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z4CBJT9SYCE6FW6GPF', 'rain', 'MTH102', 100, 'Calculus I', 'Limits, differentiation, integration', '01K5E7T3Z0S5ZJDP8466T85YC3', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Biology
  ('01K5E7T3Z4KD6X17R1PB4BZM2B', 'harmattan', 'BIO101', 100, 'General Biology I', 'Cell biology, genetics, ecology', '01K5E7T3Z0CXMBZZDW1WPPFFFP', '01K5E7T3YYTV9YAMFMA4MDHXCV'),
  ('01K5E7T3Z3QV76526ZW999BV33', 'rain', 'BIO102', 100, 'General Biology II', 'Plant and animal physiology', '01K5E7T3Z0CXMBZZDW1WPPFFFP', '01K5E7T3YYTV9YAMFMA4MDHXCV'),

  -- Mechanical Engineering
  ('01K5E7T3Z3K1ENNDAQZANR47M9', 'harmattan', 'MEE101', 100, 'Engineering Drawing I', 'Basics of engineering drawing and graphics', '01K5E7T3Z0N7M43AY947ND3HMY', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z3JXARBRS0YE3M1D3X', 'rain', 'MEE102', 100, 'Workshop Practice', 'Hands-on practice in mechanical workshops', '01K5E7T3Z0N7M43AY947ND3HMY', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Civil Engineering
  ('01K5E7T3Z3GHBKTZNDVG0DVD1K', 'harmattan', 'CVE101', 100, 'Introduction to Civil Engineering', 'Overview of civil engineering profession', '01K5E7T3Z0YJSV68CC53YC5J0P', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z2MKTN539JZNZRCBCF', 'rain', 'CVE102', 100, 'Engineering Mechanics', 'Statics and dynamics basics', '01K5E7T3Z0YJSV68CC53YC5J0P', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Electrical Engineering
  ('01K5E7T3Z2757WGB0JYQXT3DHT', 'harmattan', 'EEE101', 100, 'Introduction to Electrical Engineering', 'Basics of circuits and signals', '01K5E7T3Z1FFYBQ0WDJCWBV9AH', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z2B4C7YK38C2SYSWTA', 'rain', 'EEE102', 100, 'Basic Electronics', 'Introduction to semiconductors and diodes', '01K5E7T3Z1FFYBQ0WDJCWBV9AH', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Chemical Engineering
  ('01K5E7T3Z6GZYZ9BKFR5AT9RY9', 'harmattan', 'CHE101', 100, 'Intro to Chemical Engineering', 'Overview of chemical engineering principles', '01K5E7T3Z1VFTX70VHSM7367N2', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z71DR2RJA9AEBZF8YM', 'rain', 'CHE102', 100, 'Material and Energy Balance', 'Material balance in chemical processes', '01K5E7T3Z1VFTX70VHSM7367N2', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Agricultural Engineering
  ('01K5E7T3Z7ZAYBBSQAR7GPX3JC', 'harmattan', 'AGE101', 100, 'Introduction to Agric Engineering', 'Overview of agricultural machinery and systems', '01K5E7T3Z11JW1ZY3D1109JJNF', '01K5E7T3YYEBVX3W6DT11T2NNB'),
  ('01K5E7T3Z759WEAE0YP4G7V859', 'rain', 'AGE102', 100, 'Soil and Water Conservation', 'Basics of irrigation and soil conservation', '01K5E7T3Z11JW1ZY3D1109JJNF', '01K5E7T3YYEBVX3W6DT11T2NNB'),

  -- Architecture
  ('01K5E7T3Z77SRTA3S6GDFDCE74', 'harmattan', 'ARC101', 100, 'Architectural Graphics', 'Basic design and architectural drawings', '01K5E7T3Z1SXPWC68DZ9ME7PN3', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z7R7A1ZHB1JJS5GJHK', 'rain', 'ARC102', 100, 'History of Architecture I', 'History of world architecture up to Renaissance', '01K5E7T3Z1SXPWC68DZ9ME7PN3', '01K5E7T3YZZCGAQGRBDTG49KM8'),

  -- Urban & Regional Planning
  ('01K5E7T3Z85M6FNSM20VMPGC8H', 'harmattan', 'URP101', 100, 'Intro to Urban Planning', 'Principles of urban and regional planning', '01K5E7T3Z1ZFQ7W6PV6WEPE5SM', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z8QQW1ASV7KS9AWGBZ', 'rain', 'URP102', 100, 'Land Use Planning', 'Concepts of land allocation and zoning', '01K5E7T3Z1ZFQ7W6PV6WEPE5SM', '01K5E7T3YZZCGAQGRBDTG49KM8'),

  -- Environmental Management
  ('01K5E7T3Z8NEF21P27JJV5S1E9', 'harmattan', 'EMT101', 100, 'Intro to Environmental Management', 'Concepts of environment and sustainability', '01K5E7T3Z2Q833D75MY0EF4JQ7', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5E7T3Z862D5RXZ5T7YK0K78', 'rain', 'EMT102', 100, 'Pollution Control', 'Methods of pollution assessment and control', '01K5E7T3Z2Q833D75MY0EF4JQ7', '01K5E7T3YZZCGAQGRBDTG49KM8'),

  -- Surveying & Geoinformatics
  ('01K5EDX2ZM3F2KHNQ253WCBF21', 'harmattan', 'SVG101', 100, 'Intro to Surveying', 'Fundamentals of land surveying', '01K5E7T3Z2S8V3HW5SR98YCTSW', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5EDX2ZMW6KBFKK97B325BWB', 'rain', 'SVG102', 100, 'Cartography and Mapping', 'Principles of map making and GIS', '01K5E7T3Z2S8V3HW5SR98YCTSW', '01K5E7T3YZZCGAQGRBDTG49KM8'),

  -- Estate Management
  ('01K5EDX2ZMQYZ8QZP2MB9RHWDZ', 'harmattan', 'EST101', 100, 'Principles of Estate Management', 'Introduction to property valuation and management', '01K5E7T3Z20HCABXJRAQH6PZSP', '01K5E7T3YZZCGAQGRBDTG49KM8'),
  ('01K5EDX2ZN6TYQ4VNYNZTTXMXY', 'rain', 'EST102', 100, 'Land Economics', 'Economic principles applied to land use', '01K5E7T3Z20HCABXJRAQH6PZSP', '01K5E7T3YZZCGAQGRBDTG49KM8');



























