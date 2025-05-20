"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Modal,
  Button,
  TextField,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PieChartIcon from "@mui/icons-material/PieChart";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Dashboard() {
  const [income, setIncome] = useState(4500);
  const [openModal, setOpenModal] = useState(false);
  const [tempIncome, setTempIncome] = useState(income);

  const handleOpen = () => {
    setTempIncome(income);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);
  const handleSave = () => {
    setIncome(tempIncome);
    handleClose();
  };

  return (
    <Box p={4} bgcolor={"background.paper"} height={"100vh"}>
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Welcome back! Here’s a quick look at your finances.
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent={"space-around"}
              >
                <TrendingUpIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Monthly Income</Typography>
                  <Typography variant="h5" my={1}>
                    ${income}{" "}
                  </Typography>
                  <Button size="small" color="secondary" onClick={handleOpen}>
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <SavingsIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Savings Goal</Typography>
                  <Typography variant="h5" my={1}>
                    $10,000
                  </Typography>
                  <Button size="small" color="secondary" onClick={handleOpen}>
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <CreditCardIcon color="error" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Credit Usage</Typography>
                  <Typography variant="h5" my={1}>
                    $1,200
                  </Typography>
                  <Button size="small" color="secondary" onClick={handleOpen}>
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <PieChartIcon color="warning" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Spending 50-30-20</Typography>
                  <Typography variant="h5" my={1}>
                    Balanced
                  </Typography>
                  <Button size="small" color="secondary" onClick={handleOpen}>
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h2" gutterBottom>
        Recent Activity
      </Typography>
      <Typography variant="body2" color="text.secondary">
        (Insert here Table with recent expenses, income and credit transactions)
      </Typography>
    </Box>
  );
}
