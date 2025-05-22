"use client";

import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface EditMoneyModalProps {
  open: boolean;
  tempMoney: number;
  onChange: (value: number) => void;
  onClose: () => void;
  onSave: () => void;
}

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

export default function EditMoneyModal({
  open,
  tempMoney: tempMoney,
  onChange,
  onClose,
  onSave,
}: EditMoneyModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>
          Edit Total Money
        </Typography>
        <TextField
          label="Total Money"
          type="number"
          value={tempMoney}
          onChange={(e) => onChange(Number(e.target.value))}
          fullWidth
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
