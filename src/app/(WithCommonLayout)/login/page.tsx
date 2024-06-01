import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const loginPage = () => {
  return (
    <Box mt={20}>
      <Container>
        <Card sx={{ padding: "10px 50px 40px" }}>
          <Typography
            sx={{ fontSize: 30, textAlign: "center", marginBottom: 3 }}
          >
            Login
          </Typography>
          <form className="card-body">
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
                    type="text"
                    // {...register("title")}
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
                    // {...register("description")}
                    placeholder="password"
                    required
                    fullWidth
                    minRows={20}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* <div className="form-control mt-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input input-bordered"
            required
          />
        </div> */}

            <Box mt={3}>
              <Button type="submit">
                {/* {isLoading ? "Adding..." : "Add Blog"} */}
                Login
              </Button>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default loginPage;
