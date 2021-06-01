//Import Images
import jaktmeister from "./img/JaktMeister.png";
import rentAkneg from "./img/rentakneg2.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const WorkState = () => {
  return [
    {
      title: "JaktMeister",
      mainImg: jaktmeister,
      url: "/work/jaktmeister",

      awards: [
        {
          title: "JaktMeister a hunting app for senior hunters",
          description:
            "This is one of my interm projects. The Project was to create a app for senior hunters to use. The goal was to create a simple app without complex features.",
          git: "https://github.com/LaxMeister/JaktMeister",
        },
      ],
    },
    {
      title: "Rent-a-Knegbil",
      mainImg: rentAkneg,
      url: "/work/rent-a-knegbil",
      awards: [
        {
          title: "Rent-a-Kengbil Car Rental Service",
          description:
            "This is one of my school assignments. The assignment was to create a car rental Service with a REST backend and a SPA frontend for the backend",
          git: "https://github.com/LaxMeister/Rent-a-Knegbil-Customer-Spa",
          git2: "https://github.com/LaxMeister/Rent-a-Knegbil-Admin-Spa",
          git3: "https://github.com/LaxMeister/Rent-a-Knegbil-backend",
        },
      ],
    },
    // {
    //   title: "The Racer",
    //   mainImg: theracer,
    //   url: "/work/the-racer",
    //   secondaryImg: theracer2,
    //   awards: [
    //     {
    //       title: "Truly A masterpiece",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "Fresh look on a brutal sport.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //     {
    //       title: "It’s okay lmao.",
    //       description:
    //         "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
    //     },
    //   ],
    // },
  ];
};
