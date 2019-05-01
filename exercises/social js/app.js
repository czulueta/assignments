var  churchGoer = {
    name: "Brother Jeremiah",
    age: 42,
    baptized: "yes",
    favoriteVerses: ["1 Peter 2:9", "Matthew 5:17", "Romans 10:26"],
    churchName: "Gathering of Christ Church",
    method: function (){return churchGoer.age
    },
    churchGoingFriends: [
        {
            name: "Durell",
            age: 21,
            favoriteVerses: ["Hebrews 5:12", "Revelation 2:9", "Revelation 3:9",
                {
                    lessonName: ["Fasting"],
                    baptized: "yes",
                    churchName: "Gathering of Christ Church",

                }
            ]
        }
    ],
    churchLeadership: [
        {
            name: "Tazadaq Mashapat",
            title: "Deacon",
            age: 44,
            favoriteVerses: ["Hebrews 10:26-29", "1 John 5:3", "Ephesians 6:12",
                {
                    lessonName: ["The Fruit of Patience and the Application"],
                    baptized: "yes",
                    churchName: "Gathering of Christ Church",

                }
            ]
        }
    ],
    churchOfficers: [
        {
            name: "Chazaq",
            age: 48,
            jobDuties: ["Meet and Greet", "Seat church members", "assist the leadership",
                {
                    lessonName: ["Humility In Prophetic Times"],
                    baptized: "yes",
                    churchName: "Gathering of Christ Church",

                }
            ]
        }
    ]
}
console.log(churchGoer.method())
