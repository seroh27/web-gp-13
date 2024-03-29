import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Flyout from './FlyoutMenu'

const Foods = [
    {
        name: 'مرغ با سس هاریسا',
        calorie: '۴۳۴',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-with-crushed-harissa-chickpeas-f009cb0.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۳۲۰ گرم اسفناج', '۲ و نیم قاشق غذا خوری ماست', '۴ حلقه پیاز', '۳ عدد خیارشور', '۱ عدد لیمو', '۲ قاشق غذا خوری سس مایونز', '۴ عدد سیب زمینی بزرگ'],
        time_to_prepare: '۱۰ دقیقه',
        time_to_cook: '۱۵ دقیقه',
        description: 'سیب زمینی ها را با استفاده از چنگال سوراخ کنید، سپس به مدت 10 تا 15 دقیقه یا تا زمانی که نرم شوند، در مایکروویو قرار دهید. فر را روی 200/180 درجه سانتیگراد فن/گاز 6 گرم کنید یا سرخ کن را روشن کنید. ماهی تن را در یک کاسه بریزید و در صورت استفاده با مایونز، ماست، پیازچه، زنجبیل، نصف آب لیمو، سس تند و غوره ها مخلوط کنید.'
    },
    {
        name: 'سیب زمینی پخته شده با سویا با ماهی تن، سریراچا مایو',
        calorie: '۳۶۶',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Soy-Baked-Potatoes-with-Tuna-Sriracha-Mayo-54e2611.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'بولونی سالم',
        calorie: '۳۴۵',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-bolognese-f751240.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۳۰ دقیقه',
        time_to_cook: '۵ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'رشته فرنگی سرخ شده با تخم مرغ با جوانه لوبیا',
        calorie: '۴۹۷',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Egg-Fried-Noodles-With-Beansprouts440x400-c25fc9c.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'خورش نخود آرام پز',
        calorie: '۱۵۲',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Slow-cooker-chickpea-stew-bd40fc0.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'دانسک نارگیل و کدو حلوایی',
        calorie: '۳۲۰',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-a3a9133.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'کدو سبز، فلفل قرمز و نعناع با کوسکوس مروارید',
        calorie: '۴۱۴',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/07/Courgette-chilli-and-mint-with-pearl-couscous-ed36e76.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'مرغ زنجبیلی',
        calorie: '۴۲۸',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Chicken-udon-809159e.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'کلم بروکلی زنجبیلی سرخ شده با بادام هندی',
        calorie: '۳۸۸',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Gingery-broccoli-fry-with-cashews-42012f6.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'ماهی آزاد سرخ شده با ترخون',
        calorie: '۳۸۳',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/poached-salmon-with-tarragon_0-514bf80.jpg?quality=90&webp=true&resize=554,503',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'تیکا ماسالای سالم',
        calorie: '۳۶۵',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/healthy-tikka-masala-bc7288a.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'قاچ های سیب زمینی شیرین با سس مول',
        calorie: '۳۹۹',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/2022-03-30GFO-0622-SummerHDP20-SweetPotatoWedgesWithMoleSauce02326-ff1daf0.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'گراتین ماهی مدیترانه ای',
        calorie: '۳۷۲',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mediterranean-fish-gratins-c17b32c.jpg?quality=90&webp=true&resize=600,545',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'کدو سبز پخته و گراتن گوجه فرنگی',
        calorie: '۴۲۷',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/courgette-and-tomato-gratin-2477704.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'ریزوتو میگو، رازیانه و موشک',
        calorie: '۳۹۱',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn-fennel-rocket-risotto-7584e28.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'ریزوتو ماسکارپونه',
        calorie: '۶۳۵',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tomato-mascarpone-risotto-b090efa.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
    {
        name: 'ریزوتوی قارچ',
        calorie: '۴۴۵',
        imageUrl:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-52074_11-ca58d45.jpg?quality=90&webp=true&resize=440,400',
        ingredients: ['۱۵۰ گرم اسفناج', '۴ عدد سینه مرغ', '۱ عدد فلفل قرمز', '۱ عدد پیاز', '۲ قاشق غذا خوری روغن'],
        time_to_prepare: '۵ دقیقه',
        time_to_cook: '۱۰ دقیقه',
        description: '۱ قاشق غذاخوری روغن را در ماهیتابه ای روی حرارت متوسط گرم کنید و پیاز و فلفل را به مدت ۷ دقیقه تفت دهید تا نرم و طلایی شود.\nدر همین حین، مرغ را بین دو ورقه روغن پخت قرار دهید و کمی هم بزنید تا به ضخامت حدود 2 سانتی متر برسد. روغن باقیمانده و زعتر را با هم مخلوط کرده و روی مرغ بمالید. مزه دار کنید.\n نخود را با خمیر هریسا و 2 قاشق غذاخوری آب در تابه ای گرم کنید تا گرم شود، سپس با پوره سیب زمینی له کنید. اسفناج ها را در تابه ای با 1 قاشق غذاخوری آب یا در مایکروویو در یک کاسه ضد حرارت پژمرده کنید. مخلوط فلفل و پیاز، اسفناج و جعفری را با نخود هم بزنید. با مرغ برش داده شده و تکه های لیمو برای فشار دادن سرو کنید.'
    },
]

export default function Grid() {
    return (
        <ul dir='rtl' role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Foods.map((food) => (
                <li
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <img className="mx-auto h-32 w-max flex-shrink-0 rounded-lg" src={food.imageUrl} alt="" />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{food.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dt className="sr-only">calorie</dt>
                            <dd className="mt-3">
                                <span dir='rtl' className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    {food.calorie} کالری
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <div className='pt-3 pb-3'>
                        <Flyout description={food.description} ingridients={food.ingredients} time_to_cook={food.time_to_cook} time_to_prepare={food.time_to_prepare} />
                    </div>
                </li>
            ))}
        </ul>
    )
}
