/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "כללי בטיחות קרית ההדרכה";

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "7:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    'בטיחות בשגרה': {
        "icon":  "../assets/images/learning/sadnaot.svg",
        // שאלות לנושא הזה
        "questions": [ 
            {
                type: "binary",
                sentence: "האם מותר לעזור לעובד זכיין בעבודתו?",
                trueOrFalse: false   
            },
            {
                type: "multiple",
                question: "מה צריך לעשות עם כלי עבודה תקול?",
                ans1: 'אסור לעשות בהם שימוש!',
                ans2: "לזכות מול הזכיין/ לזרוק – בהתאם למה שנדרש",
                ans3: 'ככל שלא נשקפת סכנה אין צורך לעשות דבר',
                ans4: "תשובות א' וב' נכונות",
                correctAns: "ans4"
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "בטיחות בשגרה": {       
                 "בטיחות בשגרה": [
                    {
                        cardType: "pic_4titles_4text",
                        pic: "../assets/images/learning/pic2.jpg",
                        subTitle1: "סדר ונקיון",
                        content1: "בנוסף לפקודות המשמעת בנושא, לבוש סדר וניקיון משפיעים גם על בטיחותך, לבוש מרושל יכול להיתפס בחפצים, שרוכים פתוחים יכולים לגרום לנפילות וכדו'.",
                        subTitle2: "התנהגות",
                        content2: 'א. בעבודה/משימה בעלת סיכון, התרכז/י אך ורק בה ואל תיתן/י שיסיחו את דעתך, הסחת דעת גורמת לתאונות.<br>ב. אל תבצע/י עבודה/משימה של מישהו אחר, שאינך בקיא/בקיאה בה.<br>ג. מריבות/מעשי קונדס וכדומה, הינם פתח לתאונות.<br>ד. "אין לאן לרוץ ואין לאן למהר" – החיפזון והפזיזות גורמים לאסון!<br>ה. בראותך מכשול שהינו מסוכן, הזז/י אותו מהדרך, כדי שאחרים לא יפגעו.',
                        subTitle3: "כלים וציוד",
                        content3: "א. כאשר נמסר לך ציוד מגן אישי לביצוע משימה, כגון: כפפות, משקפי מגן, אטמי אוזניים, קסדה/כובע מגן, הנךמחויב/ת להשתמש בו!<br>ב. השתמש/י בכלי עבודה לייעודם בלבד!,כלי עבודה שאינם תקינים – אסורים לשימוש!",
                        subTitle4: "",
                        content4: ''
                    },
                    {
                        cardType: "_3titles_3text",
                        subTitle1: "עובדי הזכיין",
                        content1: "א.חל איסור מוחלט לעזור או לעסוק בעבודתו של הזכיין.<br>ב. בעוברך בסמוך לעובדים המבצעים עבודות כגון צביעה, תיקון, שטיפה וכו' אל תתקרב/י אל העובד ואל כליו.",
                        subTitle2: "הדרכות וכנסים",
                        content2: "הנך מחויב/ת להגיע לכל הדרכה/כנס/שעת בטיחות וכל מופע נוסף בנושא בטיחות, שתזומן/י אליו (אחריותהמפקדים לאפשר לך הגעה למופעים אלו).",
                        subTitle3: "",
                        content3: ""
                    },
                    {
                        cardType: "video",
                        video: "../assets/images/videos&photos/vid7.mp4",
                    },
                    {
                        cardType: "video",
                        video: "../assets/images/videos&photos/vid8.mp4",
                    }
                ]
            },
        },
    },
    // נושא
    'בטיחות באש': {
        "icon":  "../assets/images/learning/fire.svg",
        // שאלות לנושא הזה
        "questions": [ 
            {
                type: "multiple",
                question: ' האם מותר לעשות שימוש במכשירי חשמל אזרחיים ביחידה?',
                ans1: 'בכל מקרה לא',
                ans2: 'כן, כל עוד המכשירים נרכשו בשק"ם',
                ans3: 'כן, באישור ממונה בטיחות',
                ans4: 'באישור מפקד היחידה בלבד',
                correctAns: "ans3"
            },
            {
                type: "multiple",
                question: 'מי רשאי לאשר מכשיר חשמל אזרחי ביחידה?',
                ans1: 'ממונה בטיחות',
                ans2: 'קצין או נגד בעל דרגת כתף',
                ans3: 'מפקד מחלקת טירונים',
                ans4: 'מפקד הפלוגה',
                correctAns: "ans1"
            },
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            "בטיחות באש": {       
                "בטיחות באש": [
                    {
                        cardType: "pic_4titles_4text",
                        pic: "../assets/images/learning/pic3.jpg",
                        subTitle1: "דליקות",
                        content1: "א. שריפות מהוות פוטנציאל נזק גבוה לרכוש ולאדם – עד כדי מוות.<br>ב. הימנע/י ממשחקים באש, הדלקת אש במבנים ושימוש במכשירים חשמליים העלולים לגרום לקצר וכתוצאהמכך שריפה.<br>ג. הכר/י את מיקום אמצעי הכיבוי, במקומות בהם את/ה שוהה.<br>ד. בעת שריפה, הגש/י סיוע לכוחות בשטח ואם אין צורך התרחק/י!.",
                        subTitle2: "מכשירי חשמל",
                        content2: 'מכשירי חשמל - כל מכשיר חשמלי שאינו מסופק על ידי צה"ל/זכיין אלא הינו ציודך הפרטי, מחויב באישור קצין הבטיחות ביחידה לפני תחילת השימוש',
                        subTitle3: "",
                        content3: "",
                        subTitle4: "",
                        content4: "",
                    },
                    {
                        cardType: "listDots5",
                        subTitle: "בעת גילוי שריפה:",
                        li1: "נתקו את מקור החשמל למבנה או למבנה דרך מפסק הזרם הראשי. כמו כן, נתקו גנראטור ומערכות אל-פסק (UPS) במידה וקיימות במבנה.",
                        li2: "נתקו מקור אנרגיה כגון: דלק/גז אם מחובר למבנה",
                        li3: "פנו אנשים מהמבנה או מהמתקן במידת האפשר",
                        li4: "הזעיקו את צוות הכוננות היחידתי/ כוחות כיבוי אש במידת הצורך",
                        li5: "הזעיקו כוחות רפואה (צבאיים,אזרחיים) במידת הצורך."     
                    },
                    {
                        cardType: "listDots3",
                        subTitle: "פעלו לכיבוי האש כלהלן:",
                        li1: ".הפעילו את אמצעי הכיבוי המתאים ביותר בהתאם לסוג השריפה",
                        li2: "אם הוזעקו כוחות אש ופינוי מחוץ ליחידה, הציבו חייל בשער היחידה לקליטת הכוחות (מכבי אש, מגן דוד אדום) ולהכוונתם למקום האירוע.",
                        li3: "הגישו עזרה לכוחות הסיוע.",     
                    },
                    {
                        cardType: "listDots3",
                        subTitle: "עם גמר פעולות הכיבוי נקטו פעולות אלה:",
                        li1: "בודדו את האיזור - הרחיקו סקרנים ומנעו את כניסתם מקום האירוע.",
                        li2: "הציבו צופי אש (מחוץ למקום האירוע) לגילוי התלקחות חוזרת.",
                        li3: `דווחו מיד על האירוע למפקד הממונה, למבק"א/ תחום בטיחות האש ולחמ"ל` ,
                    },
                    {
                        cardType: "listDots3",
                        subTitle: "טלפונים לשעת חירום:",
                        li1: `כבאות והצלה (כב"ה): 102`,
                        li2: `מד"א: 101`,
                        li3: `משטרת ישראל: 100`,  
                    },
                    {
                        cardType: "video",
                        video: "../assets/images/videos&photos/vid4.mp4",
                    }
                ]
            }
        },
    },
    // נושא
    'בטיחות בדרכים': {
        "icon": "../assets/images/learning/car.svg",
        // שאלות לנושא הזה
        "questions": [ 
            {
                type: "binary",
                sentence: "האם מותר לחצות את הכביש הסמוך לש.ג המזרחי?",
                trueOrFalse: false   
            },
            {
                type: "multiple",
                question: "האם מותרת כניסה של כלי רכב דו גלגלים ליחידה?",
                ans1: 'כן,באישור החמ"ל',
                ans2: 'לא, אך ורק באישור מפקד קריית ההדרכה וקצין הבב"ד היחידתי',
                ans3: 'כן, באישור ממונה בטיחות',
                ans4: 'באישור המפקד הישיר',
                correctAns: "ans2"
            },
            {
                type: "multiple",
                question: "מה נהלי ההליכה בקריית ההדרכה?",
                ans1: 'במקומות מותרים ועל מדרכה בלבד.',
                ans2: "מעבר במעברי החציה",
                ans3: 'ללא מוזיקה באוזניות/ התעסקות בטלפון',
                ans4: "כל התשובות נכונות",
                correctAns: "ans4"
            }
        ],
        "amountOfQuestions": 2,
        "learningContent": { 
            'בטיחות בדרכים': {
                "1) בטיחות בדרכים ": [ 
                    {
                        cardType: "pic_4titles_4text",
                        pic: "../assets/images/learning/pic4.png",
                        subTitle1: "",
                        content1: 'א. אין להיכנס לשטח הבסיס עם כלי רכב ממנוע דו גלגלי מכל הסוגים (לדוגמא: אופניים חשמליות/אופנוע וכדומה).<br>1. במקרים חריגים יינתן אישור על ידי קצין הבטיחות בדרכים ומפקד קריית ההדרכה בלבד!כניסת/ יציאת הולכי רגל בשער המערבי.<br>2. הגעה עם רכב פרטי תבוצע רק דרך החנייה הגדולה - עלייה על המדרכה בזמן ירידה מהרכב.<br>3. הגעה מתחנת אוטובוס (לא מרכז היסעים) ע"י חצייה במקום בו יש מעבר חצייה בלבד!<br>4. לא יבוצע שימוש בחניון הקטן לחניית רכבים – יעוד חנייה זו היא המתנה לכניסה רכובה לבסיס בלבד.',
                        subTitle2: "כניסת/ יציאת הולכי רגל בשער המזרחי",
                        content2: 'הגעת ויציאת הולכי רגל רק על ידי אוטובוס מתחנות הסמוכות לש.ג. מבלי לחצות את הכביש!',
                        subTitle3: "הליכה בתוך קריית ההדרכה",
                        content3: 'א. הליכה תתבצע על מדרכה ורק במקומות המותרים בלבד.<br>ב. בכביש, שלצדו אין מדרכה או שוליים, יש ללכת בצד השמאלי של הכביש, סמוך לשפתו, כשפניך לכיווןהתנועה. בלילה יש לעשות שימוש באמצעי תאורה או לבוש מחזיר אור<br>ג. אין לנוע בכביש, כאשר יש לצדך מדרכה, או שוליים תקינים או שביל שהוקצה להולכי רגל.<br>ד. חציית כבישים תבוצע במקום בו יש מעבר חצייה. במידה ואין מעבר חצייה, תבוצע החצייה במקום בו קייםשדה ראיה בטוח, לאחר ווידוא כי הדרך פנוי, בקו ישר ובמהירות סבירה (הליכה מהירה ולא ריצה)<br>ה. אין לעשות שימוש בטלפון נייד תוך כדי הליכה ובעיקר במעברי חצייה.<br>ו. חל איסור על שמיעת מוזיקה באוזניות תוך כדי תנועה רגלית.',
                        subTitle4: "חניון ההיסעים",
                        content4: "א. הירידה והעלייה לאוטובוס תעשה בזהירות רק מהמדרכה שברציפים ורק לאחר שהאוטובוס ביצע עצירהמלאה.<br>ב. אין לעמוד על שפת המדרכה ברציפים, אין לרדת מהמדרכה לאספלט.<br>ג. בנסיע",
                    },
                    {
                        cardType: "video",
                        video: "../assets/images/videos&photos/vid1.mp4"
                    }
                ],
                "2) בטיחות בדרכים ": [ 
                    {
                        cardType: "pic_4titles_4text",
                        pic: "../assets/images/learning/pic5.jpg",
                        subTitle1: "זהירות בדרכים בחופשה",
                        content1: "כשנוהגים רק נוהגים, אין לעשות שימוש בטלפון נייד וכדומה.חגור/חגרי חגורת בטיחות בכל נסיעה.התאם/י את מהירותך לכביש ולעולם אל תעבור/תעברי את המהירות המותרת.אם את/ה בנהיגה ומרגיש/ה עייף/ה עצור/עצרי במקום בטוח להתרעננות, שתה/י משקה קל או קפה, לך/י מעט ברגל או קח/י תנומה של מספר דקות.<br>• אם שותים לא נוהגים, בשביל זה יש חברים.<br>• שתית?? העזר/י בנהג תורן/מונית/תחבורה ציבורית או לחלופין תישאר/י ללון אצל חברים/בקש/י שיאספו אותך.<br>• אל תעלה/י לרכב שהנהג בו שתה – החיים שלך יקרים מידי מכדי לאבד אותם על ידי נהג שיכור.<br>חצה/י את הכביש במעבר חצייה בלבד.<br>• בתנועתך בדרכים חשוכות, לבש/י בגדים זוהרים או עשה/י שימוש בפנס.<br>• אהיה/תהי ערני/ת לסביבה, המנע/י מהליכה תוך כדי שמיעת מוזיקה או שימוש בפלאפון.",
                        subTitle2: "כלי רכב דו גלגליים",
                        content2: '(אם הינך נוהג/ת או נוסע/ת באופנוע/אופניים וכדומה)<br>א. קסדה תקנית חובה!<br>ב. לבש/י לבוש מיגון מתאים.<br>ג. כלי רכב דו גלגלים אינם מצוידים באמצעי מיגון מספקים ולכן הטעות/התאונה הקטנה ביותר, יכולה להסתיים באסון!<br>זכור/זכרי תמיד, עדיף להימנע מתאונות מאשר לטפל בהם בפציעה חמורה ואף מוות, לכן תהיה/תהי זהיר/ה וחכם/ה!',
                        subTitle3: "",
                        content3: "",
                        subTitle4: "",
                        content4: "",
                    },
                ],
            }
           
        },
    }
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}
CARD_TYPES.listDots5 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
        card.querySelector(".li4").innerHTML = json.li4;
        card.querySelector(".li5").innerHTML = json.li5;
    }
}
CARD_TYPES.listDots3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}
CARD_TYPES.listNumbers3 = {
    init(card, json) {
        card.querySelector(".sub-title").innerHTML = json.subTitle;
        card.querySelector(".li1").innerHTML = json.li1;
        card.querySelector(".li2").innerHTML = json.li2;
        card.querySelector(".li3").innerHTML = json.li3;
    }
}