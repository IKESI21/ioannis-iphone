import Experiences from "./Experiences"

const ListExperiences = (): JSX.Element => {
    const exp = [
        {
            title: "Accès Editions", date: "Currently - Freelance", description: "Maintenance of the application, development of new features and updates on App Store & Google Play Store", image: "/acces.png"
        },
        {
            title: "Accès Editions", date: "September 2021 to august 2022", description: "Development of a mobile app for sports teachers to help them manage their classes, groups and sessions.", image: "/acces.png"
        },
    {
        title: "hiddentity", date: "2020 to 2022", description: "Development of a mobile app for job seekers and recruiters that matches them solely via their skills.The job seeker is 100% anonymous to avoid any kind of discrimination.", image: "https://media-exp1.licdn.com/dms/image/C4E0BAQH1xqlmJvIEBg/company-logo_200_200/0/1593473128241?e=2159024400&v=beta&t=LUF0kQIDgyvJOqU3p_dl90impmjBu-9mdNay_xkN1jg"
    },
    { title: "Inman", date: "April to july 2020", description: "Development of a non-contact smart tap \"anti-covid\"", image: "https://pbs.twimg.com/profile_images/1072394960673140736/hfu6NH31.jpg" },
    // { title: "Hackaton ENA/Epitech", date: "April 2019", description: "Conception of an app to help French motorists with alternatives itineraries depending on low emission zones", image: "https://www.epitech.eu/fr/wp-content/uploads/2018/06/Epitech_ENA_Innonvation_Hackathon-1.png" },
    { title: "Groupama Grand-Est - Intern", date: "September to december 2018", description: "Applications migration (SQL, C# ASP.NET / WPF)", image: "https://assets.justacote.com/photos_entreprises/agence-groupama-de-clermont-ferrand-clermont-ferrand-152034645154.png" },
    ]

    return (
        <div className="flex flex-wrap flex-col pb-10">
            {exp.map((experience, index) => (
                <Experiences key={index} {...experience} />

            ))}
        </div>
    )
}

export default ListExperiences;