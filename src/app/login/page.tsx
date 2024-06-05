/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { loginUser } from "@/utils/action/loginUser";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Cookies from "js-cookie";

// export type formValues = {
//   email: string;
//   password: string;
// };

const loginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      // console.log(res);
      if (res?.token) {
        // Store the token in cookies
        Cookies.set("token", res.token, { expires: 1 }); // expires in 1 day
        router.push("/Dashboard");
      }
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  return (
    <Box mt={20}>
      <Container>
        <Card sx={{ padding: "10px 50px 40px" }}>
          <Typography
            sx={{ fontSize: 30, textAlign: "center", marginBottom: 3 }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    type="email"
                    {...register("email")}
                    placeholder="user name"
                    required
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register("password")}
                    placeholder="password"
                    required
                    fullWidth
                    minRows={20}
                  />
                </Box>
              </Grid>
            </Grid>

            <Box mt={3}>
              <Button type="submit">Login</Button>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default loginPage;
