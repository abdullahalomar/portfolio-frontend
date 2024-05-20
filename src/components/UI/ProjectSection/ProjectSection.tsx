// "use client";

// import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";

// import { Container } from "@mui/material";

// import Slider from "@/components/Slider/Slider";
// import Carousel from "@/components/Caurosel/Caurosel";
// import Projects from "@/components/Projects/Projects";

// export default function ProjectSection() {
//   return (
//     <Box mt={10}>
//       <Container>
//         <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}>
//           Showcasing My Projects
//         </Typography>
//         {/* <Slider /> */}
//         <Carousel />
//         {/* <Projects /> */}
//       </Container>
//     </Box>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import online from "@/assets/img/online.png";

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 320 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            Toothbrush
          </Typography>
          <Box sx={{ borderRadius: "100%", width: "50px" }}>
            <Image src={online} height={300} width={400} alt="online image" />
          </Box>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          ecommerce
        </Typography>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Typography>View</Typography>
          <Typography>Details</Typography>
        </Stack>
      </Box>
    </Card>
  );
}
