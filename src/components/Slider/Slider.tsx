// import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
// import Image from "next/image";
// import mindMap from "@/assets/mind-map-Thumbnail.png";
// import Link from "next/link";
// import { useGetAllProjectsQuery } from "@/redux/api/projectApi";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// export default function Slider() {
//   const { data, isLoading } = useGetAllProjectsQuery({});
//   const projects = data?.projects;

//   return (
//     <>
//       <Carousel axis="horizontal" autoPlay>
//         {projects?.map((project: any) => (
//           <Box
//             key={project._id}
//             sx={{ position: "relative", width: "400px", height: "220px" }}
//           >
//             <Image
//               src={mindMap}
//               layout="fill"
//               objectFit="cover"
//               alt="mind-map-app"
//               className="rounded"
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 20,
//                 left: 20,
//                 color: "white",
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "black",
//                   padding: "5px 10px",
//                   backgroundColor: "#6AD4DD",
//                   opacity: "0.8",
//                   borderRadius: 1,
//                   fontSize: "12px",
//                   fontWeight: 300,
//                 }}
//                 component={Link}
//                 href="/"
//               >
//                 View Project
//               </Typography>
//               <Box
//                 sx={{
//                   backgroundColor: "#DFF5FF",
//                   opacity: "0.8",
//                   my: 2,
//                   borderRadius: 1,
//                   paddingX: 1,
//                   paddingY: 2,
//                   marginRight: 2,
//                 }}
//               >
//                 <Typography sx={{ color: "black" }}>
//                   {project?.title}
//                 </Typography>
//                 <Typography sx={{ color: "black", fontSize: "11px" }}>
//                   {project?.description}
//                 </Typography>
//               </Box>
//               <Typography
//                 sx={{
//                   color: "white",
//                   padding: "5px 10px",
//                   backgroundColor: "#98ABEE",
//                   borderRadius: 1,
//                 }}
//                 component={Link}
//                 href="https://mind-map-two.vercel.app"
//               >
//                 Details
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Carousel>
//     </>
//   );
// }

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import { useKeenSlider } from "keen-slider/react";
import mindMap from "@/assets/mind-map-Thumbnail.png";
import "keen-slider/keen-slider.min.css";
// import "./Slider.css";

export default function Slider() {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <div ref={ref} className="keen-slider">
        {projects?.map((project: any) => (
          <Box
            component="div"
            key={project._id}
            className="keen-slider__slide number-slide1"
          >
            <Box sx={{ position: "relative", width: "400px", height: "220px" }}>
              <Image
                src={mindMap} // Ensure this path is correct
                layout="fill"
                objectFit="cover"
                alt={project.title || "Project Image"}
                className="rounded"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    padding: "5px 10px",
                    backgroundColor: "#6AD4DD",
                    opacity: "0.8",
                    borderRadius: 1,
                    fontSize: "12px",
                    fontWeight: 300,
                  }}
                  component={Link}
                  href={`/project/${project._id}`}
                >
                  View Project
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#DFF5FF",
                    opacity: "0.8",
                    my: 2,
                    borderRadius: 1,
                    paddingX: 1,
                    paddingY: 2,
                    marginRight: 2,
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "black", fontSize: "11px" }}>
                    {project.description}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "white",
                    padding: "5px 10px",
                    backgroundColor: "#98ABEE",
                    borderRadius: 1,
                  }}
                  component={Link}
                  href={project.url || "https://mind-map-two.vercel.app"}
                >
                  Details
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </Box>
  );
}
