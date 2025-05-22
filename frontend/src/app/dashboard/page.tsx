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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditIncomeModal from "../components/EditIncomeModal";
import EditMoneyModal from "../components/EditMoneyModal";
import EditCreditModal from "../components/EditCreditModal";

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

type spending = "Balanced" | "50-30-20" | "70-20-10";

export default function Dashboard() {
  const [money, setMoney] = useState(10000);
  const [income, setIncome] = useState(4500);
  const [goals, setGoals] = useState(2000);
  const [credit, setCredit] = useState(1200);
  const [spending, setSpending] = useState("Balanced");
  const [openModal, setOpenModal] = useState(false);
  const [tempIncome, setTempIncome] = useState(income);
  const [tempMoney, setTempMoney] = useState(money);
  const [tempGoals, setTempGoals] = useState(goals);
  const [tempCredit, setTempCredit] = useState(credit);
  const [tempCreditUsage, setTempCreditUsage] = useState(0);
  const [tempSpending, setTempSpending] = useState(spending);
  const [activeModal, setActiveModal] = useState<
    null | "money" | "income" | "goals" | "credit" | "spending"
  >(null);

  const handleOpen = (
    type: "money" | "income" | "goals" | "credit" | "spending"
  ) => {
    if (type === "income") {
      setTempIncome(income);
    }
    if (type === "money") {
      setTempMoney(money);
    }
    if (type === "goals") {
      setTempGoals(goals);
    }
    if (type === "credit") {
      setTempCredit(credit);
    }
    if (type === "spending") {
      setTempSpending(spending);
    }
    setActiveModal(type);
  };

  const handleClose = () => setActiveModal(null);

  const handleSave = () => {
    if (activeModal === "income") {
      setIncome(tempIncome);
    }
    if (activeModal === "money") {
      setMoney(tempMoney);
    }
    if (activeModal === "goals") {
      setGoals(tempGoals);
    }
    if (activeModal === "credit") {
      setCredit(tempCredit);
      setTempCreditUsage(tempCreditUsage);
    }
    if (activeModal === "spending") {
      setSpending(tempSpending);
    }
    setActiveModal(null);
  };

  return (
    <Box p={4} bgcolor={"background.paper"} height={"100vh"}>
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="secondary" gutterBottom>
        Welcome back! Here’s a quick look at your finances.
      </Typography>
      <Card
        elevation={3}
        sx={{
          mt: 4,
          bgcolor: "primary.main",
          color: "secondary",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            justifyContent={"center"}
          >
            <AttachMoneyIcon color="secondary" fontSize="large" />
            <Box display="flex" alignItems="center" flexDirection={"column"}>
              <Typography variant="h6">Total Money</Typography>
              <Typography variant="h5" my={1}>
                $
                {money
                  ? money.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "$0.00"}
              </Typography>
              <Button
                size="small"
                color="secondary"
                onClick={() => handleOpen("money")}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <EditMoneyModal
        open={activeModal === "money"}
        tempMoney={tempMoney}
        onChange={setTempMoney}
        onClose={handleClose}
        onSave={handleSave}
      />
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={3}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={4}
                justifyContent={"center"}
              >
                <TrendingUpIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Monthly Income</Typography>
                  <Typography variant="h5" my={1}>
                    $
                    {income
                      ? income.toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "$0.00"}
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleOpen("income")}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <EditIncomeModal
            open={activeModal === "income"}
            tempIncome={tempIncome}
            onChange={setTempIncome}
            onClose={handleClose}
            onSave={handleSave}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={5}
                justifyContent={"center"}
              >
                <SavingsIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Savings Goal</Typography>
                  <Typography variant="h5" my={1}>
                    $
                    {goals
                      ? goals.toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "$0.00"}
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleOpen("goals")}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={5}
                justifyContent={"center"}
              >
                <CreditCardIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Typography variant="h6">Credit Usage</Typography>
                  <Typography variant="h5" my={1}>
                    $
                    {credit
                      ? credit.toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "$0.00"}
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleOpen("credit")}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <EditCreditModal
            open={activeModal === "credit"}
            tempCredit={tempCredit}
            tempCreditUsage={tempCreditUsage}
            onChange={setTempCredit}
            onClose={handleClose}
            onSave={handleSave}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={5}
                justifyContent={"center"}
              >
                <PieChartIcon color="secondary" fontSize="large" />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                  textAlign={"center"}
                >
                  <Typography variant="h6">Spending 50-30-20</Typography>
                  <Typography variant="h5" my={1}>
                    {spending}
                  </Typography>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleOpen("spending")}
                  >
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
