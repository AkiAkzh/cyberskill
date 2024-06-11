import { FunctionComponent, useContext, useState } from "react";
import NavBar from "../components/NavBar";
import FooterContainer from "../components/FooterContainer";
import { Context } from "..";
import { useLanguage } from '../context/LanguageContext';
import { SHA256 } from "crypto-js";
import "./CoursePage.css";

const translations = {

  EN: {
    tasks: "Tasks",
    submit_button: "Submit",
    correct_button: "Correct",
    hint_button: "Hint",
    placeholder: "Answer",
    incorrect: "Oops.. The answer is incorrect",

    hint0: "Hint: Use the ASCII values of characters.",


    question0: "Encryption and decryption using a symmetric algorithm:",
    question0_1: "Create a function to encrypt text using the Caesar cipher. Encrypt the word 'CyberSkills' with a shift of 2. Then decrypt it.",
    question1: "Generation and use of a public and private key pair in asymmetric cryptography:",
    question1_0: "Use the PyCryptodome library to generate an RSA key pair. Implement message encryption using the public key and decryption using the private key.",
    question2: "Write a program in the programming language of your choice that allows the user to enter a text message and a key, and then encrypts this message using the AES algorithm. After that, the program should allow the user to decrypt the encrypted message by entering the key.",
    question3: "After generating the keys, you can start encrypting the message. For example, we have the message 'CyberSkills'.",
    question4: "After encrypting the message, we can try to decrypt it using the private key.",
    question5: "Write a Python program that accepts a text string as input, creates a digital signature of this string using the SHA-256 hash function, and then checks the integrity of the message by comparing the received signature with the expected one.",
    question6: "Write a function in the programming language of your choice that accepts data as input and returns its hash using the MD5 or SHA-256 algorithm. Then test this function on several different inputs and make sure that it returns the expected results.",
    question7: "The task is given to encrypt a text message using the AES encryption algorithm with a key length of at least 256 bits. They then have to decrypt the encrypted message they receive using the correct key to verify the integrity of the data.",
    question8: "Students are provided with a set of encrypted messages using various encryption algorithms and key lengths. Using well-known cryptanalysis techniques, they should try to recover the original messages and identify the vulnerabilities of each algorithm.",

    answer0: "pentest",

    course_page_title: "Introduction to Cryptography",
    difficulty: "Difficulty:",
    easy: "Easy",
    category: "Category:",
    author: "Author:",
    course_page_description: "Start learning Cryptography fundamentals to master your information security skills.",
    theoretical_part: "Theoretical part",
    cryptography_desc: "Cryptography is the science of methods to ensure the confidentiality, integrity and authenticity of information. The history of cryptography goes back to ancient times, from simple Caesar ciphers to complex modern algorithms.",
    crypt_aims_list: "The main purposes of cryptography include:",
    confidentiality: "Confidentiality: data protection from unauthorized access.",
    integrity: "Integrity: data protection against unauthorized modification.",
    authentication: "Authentication: confirmation of the authenticity of the participants in the exchange of information.",
    non_repudiation: "Non-repudiation: the impossibility of renouncing the authorship of the message.",
    crypt_hist: "The history of cryptography begins in ancient times, when people used simple ciphers such as the Caesar cipher to hide their messages. With the development of technology, cryptographic methods have become more complex and secure.",
    crypt_type_list: "The main types of cryptography:",
    crypt_type_list_1: "Symmetric cryptography: Uses a single key to encrypt and decrypt data. An example is the Caesar cipher.",
    crypt_type_list_2: "Asymmetric cryptography: uses two keys – public for encryption and private for decryption. An example is the RSA algorithm.",
    symmetric_crypt: "Symmetric encryption:",
    ceaser_example: "Let's consider a simple example of using the Caesar cipher, which replaces each character in the text with a character that is several positions ahead in the alphabet.",
    ceaser_example_1: "Suppose we want to encrypt a 'HELLO' message using a symmetric Caesar algorithm with an offset key of 3.",
    ceaser_example_2: "So the encrypted message will be 'KHOOR'.",
    assymetric_example: "Asymmetric encryption for generating a key pair in the RSA algorithm:",
    symmetric_alg: "Symmetric algorithms",
    symmetric_alg_desc: "Symmetric cryptography algorithms involve the use of a single key for both encryption and decryption of data. The basic principles of symmetric algorithms are as follows: data is encrypted using a key, then encrypted data can only be decrypted with the same key. This provides a high level of security, because in order to decrypt data, an attacker needs to find out the key, which must be stored in a secure place.",
    symmetric_alg_example: "Example: Imagine that Alice wants to send a message to Bob, but wants only him to be able to read it. It uses a symmetric encryption algorithm, such as AES, to encrypt a message with a key. She then sends an encrypted message to Bob. Now only Bob can decrypt the message, because only he has the key.",
    asymmetric_alg: "Asymmetric algorithms",
    asymmetric_alg_desc: "Asymmetric cryptography, or public key cryptography, involves the use of two keys: public and private.",
    asymmetric_alg_list_1: "The public key is known to all users and is used to encrypt data.",
    asymmetric_alg_list_2: "The private key remains secret and is used to decrypt encrypted messages.",
    asymmetric_alg_text: "Unlike symmetric cryptography, where the same key is used for encryption and decryption, asymmetric cryptography provides a high level of security by using different keys for different operations. This means that even if someone receives the public key, they will not be able to decrypt messages encrypted with it without access to the corresponding private key.",
    asymmetric_alg_princ_list: "Basic principles of operation of asymmetric algorithms:",
    asymmetric_alg_princ1: "Generating a key pair: The public key can be freely distributed, whereas the private key must be kept secret.",
    asymmetric_alg_princ2: "Encryption: The public key is used to encrypt the data.",
    asymmetric_alg_princ3: "Decryption: The private key is used to decrypt data encrypted with the public key.",
    asymmetric_alg_princ4: "Electronic signature: The private key is used to create a digital signature that can be verified using the public key, ensuring the integrity and authenticity of the data.",
    application_asym_alg: "Application of asymmetric cryptography:",
    application_asym_alg1: "Data encryption: Ensuring confidentiality during data transmission.",
    application_asym_alg2: "Electronic signature: Confirmation of authenticity and integrity of data.",
    hash_func: "Hash functions",
    hash_func_desc: "Hash functions are special mathematical functions that convert input data of arbitrary length into a fixed set of bits called a hash. One of the main properties of hash functions is one-sidedness, which means that calculating the hash from the data is simple, but it is impossible to restore the original data from the hash. Another important property is the uniformity of the distribution, which ensures that any change in the input data will significantly change the original hash. These properties make hash functions indispensable in cryptographic applications.",
    example: "Example:",
    hash_func_example: "Let's imagine that we have a text document and we want to check its integrity. We can use a hash function to create a unique hash from the contents of this document. If even one character in the document changes, the hash will be very different. This way, when we receive the document again, we can calculate the hash again and compare it with the original hash to check if there have been changes in the document.",
    crypt_att_prot: "Cryptographic attacks and protection against them",
    crypt_att_prot_desc: "Cryptography plays a key role in ensuring data security, but it is also susceptible to various attacks. The main types of cryptographic attacks include brute force search, time attacks, and key length attacks. A brute force search involves trying all sorts of key combinations to decrypt encrypted data. Time attacks are based on analyzing the time it takes to perform cryptographic operations to extract key information. Key length attacks target vulnerabilities in encryption algorithms associated with using keys that are too short.",
    crypt_att_prot_example: "Suppose we have an encrypted message using the AES encryption algorithm with a 128-bit key. An attacker, knowing the encryption algorithm and seeing the encrypted message, can launch a reverse lookup attack to try to find the correct key by sequentially checking all possible combinations of key bits.",
  
  
  },

  KZ: {
    tasks: "Тапсырмалар",
    submit_button: "Жіберу",
    correct_button: "Дұрыс",
    hint_button: "Кеңес",
    placeholder: "Жауап",
    incorrect: "Жауап дұрыс емес",

    hint0: "Кеңес: ASCII форматындағы таңба мәндерін қолданыңыз.",


    question0: "Симметриялық алгоритмді қолдана отырып шифрлау және шифрын ашу:",
    question0_1: "Цезарь шифрын пайдаланып мәтінді шифрлау мүмкіндігін жасаңыз. 'CyberSkills' сөзін 2 ауысыммен шифрлаңыз. Содан кейін оны шешіңіз.",
    question1: "Асимметриялық криптографияда ашық және жеке кілттер жұбын құру және пайдалану:",
    question1_0: "RSA кілттерін жасау үшін PyCryptodome кітапханасын пайдаланыңыз. Хабарламаны ашық кілтпен шифрлауды және оны жеке кілтпен шифрлауды жүзеге асырыңыз.",
    question2: "Пайдаланушыға мәтіндік хабарлама мен кілтті енгізуге мүмкіндік беретін, содан кейін Бұл хабарламаны AES алгоритмі арқылы шифрлайтын бағдарламаны таңдаған бағдарламалау тілінде жазыңыз. Осыдан кейін бағдарлама пайдаланушыға кілтті енгізу арқылы шифрланған хабарламаның шифрын ашуға мүмкіндік беруі керек.",
    question3: "Кілттерді жасағаннан кейін хабарламаны шифрлауды бастауға болады. Мысалы, бізде 'CyberSkills' хабары бар.",
    question4: "Хабарламаны шифрлағаннан кейін оны жеке кілтпен шифрды шешуге тырысуға болады",
    question5: "Python-да мәтіндік жолды қабылдайтын бағдарламаны жазыңыз, SHA-256 хэш функциясын қолдана отырып, сол жолдың сандық қолтаңбасын жасаңыз, содан кейін алынған қолтаңбаны күткенмен салыстыру арқылы хабарламаның тұтастығын тексеріңіз.",
    question6: "Деректерді қабылдайтын және MD5 немесе SHA-256 алгоритмі арқылы хэшті қайтаратын бағдарламалау тіліндегі функцияны жазыңыз. Содан кейін бұл мүмкіндікті бірнеше түрлі кірістерде сынап көріңіз және оның күтілетін нәтижелерді қайтаратынына көз жеткізіңіз.",
    question7: "Ұзындығы кемінде 256 бит кілті бар AES шифрлау алгоритмін пайдаланып мәтіндік хабарламаны шифрлау тапсырмасы берілген. Содан кейін олар деректердің тұтастығын тексеру үшін дұрыс кілтті пайдаланып алынған шифрланған хабарламаның шифрын шешуі керек.",
    question8: "Студенттерге әртүрлі шифрлау алгоритмдері мен кілт ұзындықтарын қолдана отырып, шифрланған хабарламалар жиынтығы ұсынылады. Белгілі криптоанализ әдістерін қолдана отырып, олар бастапқы хабарламаларды қалпына келтіруге және әр алгоритмнің осалдығын анықтауға тырысуы керек.",

    answer0: "пентест",

    course_page_title: "Криптографияға кіріспе",
    difficulty: "Күрделілік:",
    easy: "Жеңіл",
    category: "Категория:",
    author: "Автор:",
    course_page_description: "Ақпараттық қауіпсіздік дағдыларын меңгеру үшін Криптография негіздерін үйренуді бастаңыз.",
    theoretical_part: "Теориялық бөлім",
    cryptography_desc: "Криптография-ақпараттың құпиялылығын, тұтастығын және шынайылығын қамтамасыз ету әдістері туралы ғылым. Криптографияның тарихы ежелгі дәуірден бастау алады, қарапайым Цезарь шифрларынан бастап күрделі заманауи алгоритмдерге дейін.",
    crypt_aims_list: "Криптографияның негізгі мақсаттарына мыналар жатады:",
    confidentiality: "Құпиялылық: деректерді рұқсатсыз кіруден қорғау.",
    integrity: "Тұтастық: деректерді рұқсатсыз өзгертуден қорғау.",
    authentication: "Аутентификация: ақпарат алмасуға қатысушылардың түпнұсқалығын растау.",
    non_repudiation: "Бұлтартпаушылық: хабарламаның авторлығынан бас тартудың мүмкін еместігі.",
    crypt_hist: "Криптография тарихы ежелгі дәуірден басталады, адамдар өз хабарламаларын жасыру үшін Цезарь шифры сияқты қарапайым шифрларды қолданған. Технологияның дамуымен криптографиялық әдістер күрделене түсті және қауіпсіз болды.",
    crypt_type_list: "Криптографияның негізгі түрлері:",
    crypt_type_list_1: "Симметриялық криптография: деректерді шифрлау және шифрын ашу үшін бір кілтті пайдаланады. Мысал ретінде Цезарь шифрын келтіруге болады.",
    crypt_type_list_2: "Асимметриялық криптография: екі кілтті пайдаланады – шифрлау үшін ашық және шифрды ашу үшін жабық. Мысал - RSA алгоритмі.",
    symmetric_crypt: "Симметриялық шифрлау:",
    ceaser_example: "Цезарь шифрын қолданудың қарапайым мысалын қарастырыңыз, ол мәтіндегі әрбір таңбаны алфавиттегі бірнеше позициядағы таңбамен ауыстырады.",
    ceaser_example_1: "Біз симметриялы Цезарь алгоритмін қолдана отырып, 'HELLO' хабарламасын 3-ші орын ауыстыру кілтімен шифрлағымыз келеді делік.",
    ceaser_example_2: "Осылайша, шифрланған хабарлама 'KHOOR' болады.",
    assymetric_example: "RSA алгоритмінде кілт жұбын құру үшін асимметриялық шифрлау:",
    symmetric_alg: "Симметриялық Алгоритмдер",
    symmetric_alg_desc: "Симметриялық криптографиялық алгоритмдер деректерді шифрлау және шифрын ашу үшін бір кілтті пайдалануды қамтиды. Симметриялық алгоритмдердің негізгі жұмыс принциптері келесідей: деректер кілтпен шифрланады, содан кейін шифрланған деректерді тек сол кілтпен шешуге болады. Бұл қауіпсіздіктің жоғары деңгейін қамтамасыз етеді, өйткені деректердің шифрын ашу үшін шабуылдаушы болуы керек кілтті білуі керек қауіпсіз жерде сақталады.",
    symmetric_alg_example: "Мысал: Алиса Бобқа хабарлама жібергісі келеді, бірақ оны тек оқи алатынын қалайды. Ол хабарламаны кілтпен шифрлау үшін AES сияқты симметриялы шифрлау алгоритмін қолданады. Содан кейін ол Бобқа шифрланған хабарлама жібереді. Енді хабарламаны тек Боб шеше алады, өйткені оның кілті ғана бар.",
    asymmetric_alg: "Асимметриялық Алгоритмдер",
    asymmetric_alg_desc: "Асимметриялық криптография немесе ашық кілтті криптография екі кілтті қолдануды қамтиды: ашық және жабық.",
    asymmetric_alg_list_1: "Ашық кілт барлық пайдаланушыларға белгілі және деректерді шифрлау үшін қолданылады.",
    asymmetric_alg_list_2: "Жеке кілт құпия болып қалады және шифрланған хабарламалардың шифрын ашу үшін қолданылады.",
    asymmetric_alg_text: "Бір кілт шифрлау және шифрын ашу үшін қолданылатын симметриялы криптографиядан айырмашылығы, асимметриялық криптография әртүрлі операциялар үшін әртүрлі кілттерді пайдалану арқылы қауіпсіздіктің жоғары деңгейін қамтамасыз етеді. Бұл дегеніміз, егер біреу ашық кілтті алса да, олар тиісті жеке кілтке қол жеткізбестен онымен шифрланған хабарламалардың шифрын шеше алмайды.",
    asymmetric_alg_princ_list: "Асимметриялық алгоритмдердің негізгі принциптері:",
    asymmetric_alg_princ1: "Кілттер жұбын құру: ашық кілт еркін таратылуы мүмкін, ал жеке кілт құпия сақталуы керек.",
    asymmetric_alg_princ2: "Шифрлау: деректерді шифрлау үшін ашық кілт қолданылады.",
    asymmetric_alg_princ3: "Шифрды ашу: жеке кілт ашық кілтпен шифрланған деректерді шифрдан шығару үшін қолданылады.",
    asymmetric_alg_princ4: "Электрондық қолтаңба: жеке кілт деректердің тұтастығы мен түпнұсқалығын қамтамасыз ете отырып, ашық кілтпен тексеруге болатын сандық қолтаңбаны жасау үшін қолданылады.",
    application_asym_alg: "Асимметриялық криптографияны қолдану:",
    application_asym_alg1: "Деректерді шифрлау: деректерді беру кезінде құпиялылықты қамтамасыз ету.",
    application_asym_alg2: "Электрондық қолтаңба: деректердің түпнұсқалығы мен тұтастығын растау.",
    hash_func: "Хэш функциялары",
    hash_func_desc: "Хэш функциялары - бұл кездейсоқ ұзындықтағы кірістерді хэш деп аталатын биттердің бекітілген жиынтығына түрлендіретін арнайы математикалық функциялар. Хэш функцияларының негізгі қасиеттерінің бірі-бұл біржақтылық, яғни деректерден хэшті есептеу қарапайым, бірақ хэш арқылы бастапқы деректерді қалпына келтіру мүмкін емес. Тағы бір маңызды қасиет - үлестірімнің біркелкілігі, ол кірістердің кез-келген өзгерісі бастапқы хэшті айтарлықтай өзгертеді. Бұл қасиеттер хэш функцияларын криптографиялық қосымшаларда қажет етеді.",
    example: "Мысал:",
    hash_func_example: "Бізде мәтіндік құжат бар және оның тұтастығын тексергіміз келеді деп елестетіп көрейік. Біз осы құжаттың мазмұнынан бірегей хэш жасау үшін хэш функциясын пайдалана аламыз. Егер құжаттағы бір таңба да өзгерсе, хэш әр түрлі болады. Осылайша, құжатты қайтадан алған кезде, біз хэшті қайта есептей аламыз және құжаттағы өзгерістердің бар-жоғын тексеру үшін оны бастапқы хэшпен салыстыра аламыз.",
    crypt_att_prot: "Криптографиялық шабуылдар және олардан қорғау",
    crypt_att_prot_desc: "Криптография деректердің қауіпсіздігін қамтамасыз етуде шешуші рөл атқарады, бірақ ол әртүрлі шабуылдарға да бейім. Криптографиялық шабуылдардың негізгі түрлеріне артық іздеу, уақыт шабуылдары және кілт ұзындығына шабуылдар жатады. Артық іздеу шифрланған деректерді декодтау үшін кілттердің барлық түрлерін қолдануға тырысады. Уақыт шабуылдары кілт туралы ақпаратты алу үшін криптографиялық операцияларды орындауға кететін уақытты талдауға негізделген. Кілт ұзындығына шабуылдар тым қысқа кілттерді қолданумен байланысты шифрлау алгоритмдеріндегі осалдықтарға бағытталған.",
    crypt_att_prot_example: "Бізде 128 биттік кілтпен AES шифрлау алгоритмін қолданатын шифрланған хабарлама бар делік. Шабуылдаушы шифрлау алгоритмін біліп, шифрланған хабарламаны көре отырып, барлық мүмкін кілт биттерінің тіркесімдерін дәйекті түрде тексеріп, дұрыс кілтті табуға тырысу үшін іздеу шабуылын бастай алады.",
  },

  RU: {
    tasks: "Задания",
    submit_button: "Отправить",
    hint_button: "Подсказка",
    correct_button: "Верно",
    placeholder: "Ответ",
    incorrect: "Ой.. Ответ неверен",

    hint0: "Подсказка: Используйте значения символов в формате ASCII.",

    question0: "Шифрование и дешифрование с использованием симметричного алгоритма:",
    question0_1: "Создайте функцию для шифрования текста с использованием шифра Цезаря. Зашифруйте слово 'CyberSkills' с сдвигом 2. Затем расшифруйте его.",
    question1: "Генерация и использование пары открытого и закрытого ключей в асимметричной криптографии:",
    question1_0: "Используйте библиотеку PyCryptodome для генерации пары ключей RSA. Реализуйте шифрование сообщения с использованием открытого ключа и его дешифрование с использованием закрытого ключа.",
    question2: "Напишите программу на языке программирования вашего выбора, которая позволяет пользователю ввести текстовое сообщение и ключ, а затем шифрует это сообщение с использованием алгоритма AES. После этого программа должна позволить пользователю расшифровать зашифрованное сообщение, введя ключ.",
    question3: "После генерации ключей можно приступить к шифрованию сообщения. Например, у нас есть сообщение 'CyberSkills'.",
    question4: "После шифрования сообщения мы можем попробовать его дешифровать с помощью закрытого ключа",
    question5: "Напишите программу на Python, которая принимает на вход текстовую строку, создает цифровую подпись этой строки, используя хэш-функцию SHA-256, а затем проверяет целостность сообщения, сравнивая полученную подпись с ожидаемой.",
    question6: "Напишите функцию на языке программирования по вашему выбору, которая принимает на вход данные и возвращает их хэш с использованием алгоритма MD5 или SHA-256. Затем протестируйте эту функцию на нескольких различных входных данных и убедитесь, что она возвращает ожидаемые результаты.",
    question7: "Дано задание зашифровать текстовое сообщение с использованием алгоритма шифрования AES с ключом длиной не менее 256 бит. Затем они должны расшифровать полученное зашифрованное сообщение, используя правильный ключ, чтобы проверить целостность данных.",
    question8: "Студентам предоставляется набор зашифрованных сообщений с использованием различных алгоритмов шифрования и длин ключей. Используя известные методы криптоанализа, они должны попытаться восстановить исходные сообщения и определить уязвимости каждого алгоритма.",

    answer0: "пентест",

    course_page_title: "Введение в Криптографию",
    difficulty: "Сложность:",
    easy: "Легкий",
    category: "Категория:",
    author: "Автор:",
    course_page_description: "Начните изучать основы Криптографии, чтобы овладеть навыками информационной безопасности.",
    theoretical_part: "Теоретическая часть",
    cryptography_desc: "Криптография – это наука о методах обеспечения конфиденциальности, целостности и подлинности информации. История криптографии уходит корнями в глубокую древность, начиная с простых шифров Цезаря до сложных современных алгоритмов.",
    crypt_aims_list: "Основные цели криптографии включают в себя:",
    confidentiality: "Конфиденциальность: защита данных от несанкционированного доступа.",
    integrity: "Целостность: защита данных от несанкционированного изменения.",
    authentication: "Аутентификация: подтверждение подлинности участников обмена информацией.",
    non_repudiation: "Неотрекаемость: невозможность отречения от авторства сообщения.",
    crypt_hist: "История криптографии начинается с древних времен, когда люди использовали простые шифры, такие как шифр Цезаря, для скрытия своих сообщений. С развитием технологий криптографические методы стали сложнее и безопаснее.",
    crypt_type_list: "Основные виды криптографии:",
    crypt_type_list_1: "Симметричная криптография: использует один ключ для шифрования и дешифрования данных. Примером является шифр Цезаря.",
    crypt_type_list_2: "Асимметричная криптография: использует два ключа – открытый для шифрования и закрытый для дешифрования. Примером является алгоритм RSA.",
    symmetric_crypt: "Симметричное шифрование:",
    ceaser_example: "Рассмотрим простой пример использования шифра Цезаря, который заменяет каждый символ в тексте на символ, находящийся на несколько позиций вперед в алфавите.",
    ceaser_example_1: "Предположим, мы хотим зашифровать сообщение 'HELLO' с использованием симметричного алгоритма Цезаря с ключом смещения 3.",
    ceaser_example_2: "Таким образом, зашифрованное сообщение будет 'KHOOR'.",
    assymetric_example: "Асимметричное шифрование для генерации пары ключей в алгоритме RSA:",
    symmetric_alg: "Симметричные алгоритмы",
    symmetric_alg_desc: "Симметричные алгоритмы криптографии предполагают использование одного ключа как для шифрования, так и для расшифрования данных. Основные принципы работы симметричных алгоритмов заключаются в следующем: данные шифруются с использованием ключа, затем зашифрованные данные можно расшифровать только с тем же ключом. Это обеспечивает высокий уровень безопасности, поскольку для расшифровки данных злоумышленнику необходимо узнать ключ, который должен быть хранится в безопасном месте.",
    symmetric_alg_example: "Пример: Представим, что Алиса хочет отправить сообщение Бобу, но хочет, чтобы только он мог его прочитать. Она использует симметричный алгоритм шифрования, например, AES, чтобы зашифровать сообщение с помощью ключа. Затем она отправляет зашифрованное сообщение Бобу. Теперь только Боб может расшифровать сообщение, поскольку только у него есть ключ.",
    asymmetric_alg: "Асимметричные алгоритмы",
    asymmetric_alg_desc: "Асимметричная криптография, или криптография с открытым ключом, предполагает использование двух ключей: открытого и закрытого.",
    asymmetric_alg_list_1: "Открытый ключ известен всем пользователям и используется для шифрования данных.",
    asymmetric_alg_list_2: "Закрытый ключ остается в секрете и используется для дешифрования зашифрованных сообщений.",
    asymmetric_alg_text: "В отличие от симметричной криптографии, где один и тот же ключ используется для шифрования и дешифрования, асимметричная криптография обеспечивает высокий уровень безопасности благодаря использованию разных ключей для разных операций. Это означает, что даже если кто-то получит открытый ключ, он не сможет дешифровать сообщения, зашифрованные с его помощью, без доступа к соответствующему закрытому ключу.",
    asymmetric_alg_princ_list: "Основные принципы работы асимметричных алгоритмов:",
    asymmetric_alg_princ1: "Генерация пары ключей: Открытый ключ может быть свободно распространен, тогда как закрытый ключ должен храниться в секрете.",
    asymmetric_alg_princ2: "Шифрование: Открытый ключ используется для шифрования данных.",
    asymmetric_alg_princ3: "Дешифрование: Закрытый ключ используется для дешифрования данных, зашифрованных открытым ключом.",
    asymmetric_alg_princ4: "Электронная подпись: Закрытый ключ используется для создания цифровой подписи, которую можно проверить с помощью открытого ключа, обеспечивая целостность и аутентичность данных.",
    application_asym_alg: "Применение асимметричной криптографии:",
    application_asym_alg1: "Шифрование данных: Обеспечение конфиденциальности при передаче данных.",
    application_asym_alg2: "Электронная подпись: Подтверждение подлинности и целостности данных.",
    hash_func: "Хэш-функции",
    hash_func_desc: "Хэш-функции - это специальные математические функции, которые преобразуют входные данные произвольной длины в фиксированный набор битов, называемый хэшем. Одно из основных свойств хэш-функций - это односторонность, что означает, что вычисление хеша от данных просто, но по хешу невозможно восстановить исходные данные. Еще одно важное свойство - равномерность распределения, которая гарантирует, что любое изменение во входных данных значительно изменит исходный хэш. Эти свойства делают хэш-функции незаменимыми в криптографических приложениях.",
    example: "Пример:",
    hash_func_example: "Представим, что у нас есть текстовый документ, и мы хотим проверить его целостность. Мы можем использовать хэш-функцию, чтобы создать уникальный хэш от содержимого этого документа. Если даже один символ в документе изменится, хэш будет сильно отличаться. Таким образом, при получении документа снова, мы можем вычислить хэш снова и сравнить его с исходным хэшем, чтобы проверить, были ли изменения в документе.",
    crypt_att_prot: "Криптографические атаки и защита от них",
    crypt_att_prot_desc: "Криптография играет ключевую роль в обеспечении безопасности данных, но она также подвержена различным атакам. Основные типы криптографических атак включают переборный поиск, атаки по времени и атаки на длину ключа. Переборный поиск предполагает попытки всевозможных комбинаций ключей для расшифровки зашифрованных данных. Атаки по времени основаны на анализе времени, затрачиваемого на выполнение криптографических операций, чтобы извлечь информацию о ключе. Атаки на длину ключа направлены на уязвимости в алгоритмах шифрования, связанные с использованием слишком коротких ключей.",
    crypt_att_prot_example: "Предположим, у нас есть зашифрованное сообщение с использованием алгоритма шифрования AES с 128-битным ключом. Злоумышленник, зная алгоритм шифрования и видя зашифрованное сообщение, может запустить атаку переборного поиска, чтобы попытаться найти правильный ключ, путем последовательного проверяя все возможные комбинации битов ключа.",

  },
}


// Функция подсказки
const HintPopup: FunctionComponent<{ hint: string, onClose: () => void }> = ({ hint, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>&times;</button>
      <p>{hint}</p>
    </div>
  </div>
);


const CoursePageCryptography: FunctionComponent = () => {
  const [code, setCode] = useState('');
  const [Prolanguage, setProLanguage] = useState('python');
  const {store} = useContext(Context);

  // store.getCourse()
  const initialAnswerState = { isCorrect: false, isSubmitted: false };
  const [userAnswers, setUserAnswers] = useState(["", ""]);
  const [answerStates, setAnswerStates] = useState(Array(120).fill(initialAnswerState));
  const [alertVisible, setAlertVisible] = useState(false);

  const { language, setLanguage } = useLanguage(); // Использование кастомного хука для управления языком
  const t = translations[language]; // Получение переводов на основе выбранного языка

  const studentEmail = "actual_user" // e-mail юзера
  const studentHashFlag1 = SHA256(studentEmail + "_pentest1").toString(); // зашифрованный flag юзера
  const studentHashFlag2 = SHA256(studentEmail + "_pentest2").toString();
  const studentHashFlag3 = SHA256(studentEmail + "_pentest3").toString();
  const studentHashFlag4 = SHA256(studentEmail + "_pentest4").toString();

  const correctAnswers = [t.answer0]; // массивых ответов на Задания
// Функция для обработки изменений в ответах пользователя
const handleAnswerChange = (index: number, value: string) => {
  setUserAnswers(prevState => {
    const updatedAnswers = [...prevState];
    updatedAnswers[index] = value.toLowerCase();
    return updatedAnswers;
  });
};

// Функция для обработки отправки ответа
const handleSubmits = (index: number) => {
  const isCorrect = userAnswers[index] === correctAnswers[index];
  const updatedAnswerStates = [...answerStates];
  updatedAnswerStates[index] = { isCorrect, isSubmitted: true };
  setAnswerStates(updatedAnswerStates);

  // Показывает ошибку на 3 сек, если ответ не правильный
  if (!isCorrect) {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  }
};
// Смена стиля кнопки в завимиости от правильности ответа
const getButtonStyle = (index: number) => {
  const { isCorrect, isSubmitted } = answerStates[index];
  return {
    backgroundColor: isSubmitted && isCorrect ? '#47dd00' : '',
    borderColor: isSubmitted && isCorrect ? '#47dd00' : '',
    color: isSubmitted && isCorrect ? 'white' : '',
    cursor: isSubmitted && isCorrect ? 'auto' : '',
  };
};

// Проверка правильности ответа при сабмишне
const isDisabled = (index: number) => answerStates[index].isSubmitted && answerStates[index].isCorrect;

// Смена текста кнопки в завимиости от правильности ответа
const getButtonText = (index: number) => answerStates[index].isSubmitted && answerStates[index].isCorrect ? t.correct_button : t.submit_button;

  const pythonCodeSymmetrical = 
  `   def caesar_cipher_encrypt(text, shift):
        encrypted_text = ""
        for char in text:
            if char.isalpha():
                shift_base = 65 if char.isupper() else 97
                encrypted_text += chr((ord(char) - shift_base + shift) % 26 + shift_base)
            else:
                encrypted_text += char
        return encrypted_text
      message = "Hello, World!"
      shift = 3
      encrypted_message = caesar_cipher_encrypt(message, shift)
      print(f"Encrypted Message: {encrypted_message}")`
  const pythonCodeAsymmetric = 
    `   from Crypto.PublicKey import RSA
      key = RSA.generate(2048)
      private_key = key.export_key()
      public_key = key.publickey().export_key()

      print(f"Private Key: {private_key.decode('utf-8')}")
      print(f"Public Key: {public_key.decode('utf-8')}")`

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    store.answerSumbit(code, Prolanguage)

  };

  const [isOpenArray, setIsOpenArray] = useState(new Array(3).fill(false));

  const toggleSection = (index: number) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  const [hintPopupVisible, setHintPopupVisible] = useState(false);
  const [hintText, setHintText] = useState("");

  const showHint = (hint: string) => {
    setHintText(hint);
    setHintPopupVisible(true);
  };

  const closeHintPopup = () => {
    setHintPopupVisible(false);
    setHintText("");
  };

  return (
    <div className="course-page">
      <NavBar />
      <div className="course-page-information-container">
        <h1 className="course-page-title">{t.course_page_title}</h1>
        <div className="course-page-tags-container">
          <div className="difficulty-container">
            <div className="difficulty-course-page">{t.difficulty}</div>
            <div className="difficulty-type">
              <div className="type-value">{t.easy}</div>
            </div>
          </div>
          <div className="category-container">
            <div className="category">{t.category}</div>
            <div className="category-type">
              <div className="categorytypetext">Cryptography</div>
            </div>
          </div>
          <div className="author-container">
            <div className="author">{t.author}</div>
            <div className="cyberskills">CyberSkills</div>
          </div>
        </div>
        <div className="course-page-description">
          {t.course_page_description}
        </div>
      </div>
      {/* Course sections Container */}
      <main className="coursesectionscontainer">
        <div className="coursesectioncontainer" onClick={() => toggleSection(0)} >
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="dropdown-name">{t.course_page_title}</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              {t.cryptography_desc}
              <br/>{t.crypt_aims_list}<br/>
              <p className="course-section-paragraph">
              <ol>
                <li>{t.confidentiality}</li>
                <li>{t.integrity}</li>
                <li>{t.authentication}</li>
                <li>{t.non_repudiation}</li>
              </ol>
              </p>
            </p>

            <p className="course-section-paragraph">
              {t.crypt_hist}
              <br/>{t.crypt_type_list}<br/>
              <p className="course-section-paragraph">
              <ol>
                <li>{t.crypt_type_list_1}</li>
                <li>{t.crypt_type_list_2}</li>
              </ol>
              </p>
            </p>

            <hr />

            <p className="course-section-paragraph">{t.symmetric_crypt}<br/>
            {t.ceaser_example}
              <div className="code-block-container">
                <div className="code-block">
                  <pre>
                    <code>
                      {pythonCodeSymmetrical}
                    </code>
                  </pre>
                </div>
              </div>
            </p>

            <p className="course-section-paragraph">
              {t.ceaser_example_1} <br />
              <ul>
                <li>H → K</li>
                <li>E → H</li>
                <li>L → O</li>
                <li>L → O</li>
                <li>O → R</li>
              </ul>
              {t.ceaser_example_2} <br />
            </p>
            
            <p className="course-section-paragraph">
              {t.assymetric_example}<br/>
              <div className="code-block-container">
                <div className="code-block">
                  <pre>
                    <code>
                      {pythonCodeAsymmetric}
                    </code>
                  </pre>
                </div>
              </div>
            </p>

            <hr />

            <div className="questions-container">
              <div className="questions-heading">{t.tasks}</div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>{t.question0}</h4>
                {t.question0_1}<br/>
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area" 
                      value={code}
                      onChange={ (e) => setCode(e.target.value)}
                      placeholder={`${t.placeholder}`}
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                   onChange={(e) => setProLanguage(e.target.value as 'python'|| 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <hr />
              <div className="question-box-container">
                <div className="question-text">
                <h4>{t.question1}</h4>
                {t.question1_0}
                </div><br/>
                  <form className="anser-box-container" onSubmit={handleSubmit}>
                    <textarea className="answer-box-input-field-area" 
                        value={code}
                        onChange={ (e) => setCode(e.target.value)}
                        placeholder="Write code"
                    />
                    <button className="submit-button" >
                      <div className="submit-button-text">{t.submit_button}</div>
                    </button>
                    <button className="hint-button" onClick={() => showHint(t.hint0)}>
                      <div className="hint-button-text" >{t.hint_button}</div>
                    </button>
                    <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python'|| 'java' || 'cpp')}>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                    </select>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(1)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">{t.symmetric_alg}</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[1] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              {t.symmetric_alg_desc}
            </p>
            
            <p className="course-section-paragraph">
              {t.symmetric_alg_example}
            </p>

            <div className="questions-container">
              <hr/>
            <div className="questions-heading">{t.tasks}</div>

              <div className="question-box-container">
                <div className="question-text">
                  {t.question2}
                </div><br />
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write code"
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
            </div>  
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(2)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">{t.asymmetric_alg}</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[2] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
            {t.asymmetric_alg_desc}<br/> 
              <p className="course-section-paragraph">
                <ol>
                  <li>{t.asymmetric_alg_list_1}</li>
                  <li>{t.asymmetric_alg_list_2}</li>
                </ol> 
              </p>
            </p>
              <img className="image-bii"
              loading="lazy"
              alt=""
              src="/asymmetric-encryption-public-key-cryptography.jpeg"
              /><br/> 
            <p className="course-section-paragraph">
            {t.asymmetric_alg_text}
            </p>

            <p className="course-section-paragraph">
            {t.asymmetric_alg_princ_list}<br/>
            <p className="course-section-paragraph">
            <ol>
                <li>{t.asymmetric_alg_princ1}</li>
                <li>{t.asymmetric_alg_princ2}</li>
                <li>{t.asymmetric_alg_princ3}</li>
                <li>{t.asymmetric_alg_princ4}</li>
            </ol>
            </p>
            </p>

            <p className="course-section-paragraph">
            {t.application_asym_alg}<br/>
              <p className="course-section-paragraph">
              <ol>
                    <li>{t.application_asym_alg1}</li>
                    <li>{t.application_asym_alg2}</li>
              </ol>
              </p>
            </p>
            <div className="questions-container">
              <div className="questions-heading">{t.tasks}</div>

              <div className="question-box-container">
                <div className="question-text">
                {t.question3}
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write code"
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                {t.question4}
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write code"
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(3)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">{t.hash_func}</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[3] &&(
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              {t.hash_func_desc}
            </p>

            <p className="course-section-paragraph">
              <h4>{t.example}</h4> 
              {t.hash_func_example}
            </p>
          <hr></hr>
            <div className="questions-container">
              <div className="questions-heading">{t.tasks}</div>
              <div className="question-box-container">
                <div className="question-text">
                {t.question5}
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                {t.question6}
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write code"
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(4)}>
        <div className="coursesectionbox">
          <div className="checkboxgraycontainer">
            <img
              className="checkboxgray-icon1"
              alt=""
              src="/checkboxgray.svg"
            />
          </div>
          <div className="coursesectionnametext">{t.crypt_att_prot}</div>
        </div>
        <div className="arrowdowncontainer">
          <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
        </div>
        </div>
        {isOpenArray[4] &&(
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
             {t.crypt_att_prot_desc}
            </p>

            <p className="course-section-paragraph">
              <h4>{t.example}</h4> 
              {t.crypt_att_prot_example}
            </p>

          <hr></hr>
            <div className="questions-container">
              <div className="questions-heading">{t.tasks}</div>
              <div className="question-box-container">
                <div className="question-text">
                 {t.question7}
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write code"
                  />
                  <button className="submit-button" >
                    <div className="submit-button-text">{t.submit_button}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint(t.hint0)}>
                    <div className="hint-button-text" >{t.hint_button}</div>
                  </button>
                  <select className="select-prog-lang" value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                {t.question8}
                </div><br/>
                <div className="anser-box-container">
                  <input className="answer-box-input-field"
                    placeholder={`${t.placeholder}`}
                    type="text"
                    value={userAnswers[0]}
                    onChange={(e) => handleAnswerChange(0, e.target.value)}
                    disabled={isDisabled(0)}
                  />
                  <button className="submit-button"
                    onClick={() => handleSubmits(0)}
                    disabled={isDisabled(0)}
                    style={getButtonStyle(0)}
                  >
                    <div className="submit-button-text"
                      style={getButtonStyle(0)}
                    >{getButtonText(0)}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </main>

      {/* Course sections Container END */}
      {hintPopupVisible && <HintPopup hint={hintText} onClose={closeHintPopup} />}
      <FooterContainer />
    </div>
  );
};

export default CoursePageCryptography;
