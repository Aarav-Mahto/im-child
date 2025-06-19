import React, { useState, useEffect } from "react";
import { Tooltip, Avatar, Badge, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem } from "@mui/material";
import "./Members.css";

// Define colors for roles
const roleColors = {
    "Product Manager": "#645394",
    "AI Developer": "#182a3e",
    "AI Assessor": "#0f5bad",
};

const Members = ({ productId }) => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [availableUsers, setAvailableUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [loadUsers, setLoadUsers] = useState(true);


    // ✅ Fetch Users with Access to the Product
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:9000/products/${productId}/users`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        if (productId && loadUsers) {
            fetchUsers();
            setLoadUsers(false);
        }
    }, [productId, loadUsers]);

    // Open/Close popup
    const handleOpen = () => {
        setOpen(true);
        fetchAllUsers();
    };
    const handleClose = () => setOpen(false);


    // Fetch user ID by name
    const fetchUserByName = async (username) => {
        try {
            const response = await fetch(`http://localhost:9000/user-id?name=${username}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            return data.id;
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    };

    const fetchAllUsers = async () => {
        try {
            const response = await fetch(`http://localhost:9000/users`);
            if (!response.ok) {
                throw new Error("Users not found");
            }
            const data = await response.json();
            setAvailableUsers(data.filter((u) => !users.find((user) => user.id === u.id)));
        } catch (error) {
            console.error("Error fetching users:", error);
            return null;
        }
    };

    // Add new member (if user exists)
    const handleAddMember = async () => {


        const userId = await fetchUserByName(selectedUser);

        try {
            const response = await fetch(`http://localhost:9000/products/${productId}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId }),
            });

            if (!response.ok) {
                throw new Error("Failed to add member");
            }

            // Refresh user list
            setSelectedUser("");
            setLoadUsers(true);
            handleClose();
        } catch (error) {
            console.error("Error adding member:", error);
        }
    };
    return (
        <div className="members">
            <h2>Contributors</h2>
            <div className="member-list">
                {users.map((user) => (
                    <Tooltip key={user.id} title={`${user.username} - ${user.role}`} arrow>
                        <Badge
                            badgeContent={user.role}
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: roleColors[user.role] || "#555",
                                    color: "white",
                                    fontSize: "0.6rem",
                                    padding: "4px 6px",
                                    borderRadius: "6px",
                                    whiteSpace: "nowrap",
                                },
                            }}
                        >
                            <Avatar
                                alt={user.name}
                                src={user.avatar}
                                sx={{ width: 60, height: 60, cursor: "pointer" }}
                            />
                        </Badge>
                    </Tooltip>
                ))}
                <Tooltip title="Add a new member" arrow>
                    <Box className="add-member" onClick={handleOpen} style={{ cursor: "pointer" }}>+</Box>
                </Tooltip>
            </div>

            {/* Add Member Popup */}
            <Dialog open={open} onClose={handleClose} sx={{
    "& .MuiDialog-paper": { 
        width: "500px", 
        maxWidth: "90vw", 
        borderRadius: "10px", 
    }
}}>
    <DialogTitle>Add a new contributor</DialogTitle>
            <DialogContent>
                {availableUsers.length > 0 ? (
                    <Select
                        fullWidth
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Please select a user
                        </MenuItem>
                        
                        {availableUsers.map((u) => (
                            <MenuItem key={u.id} value={u.username}>
                                {u.username} ({u.role})
                            </MenuItem>
                        ))}
                    </Select>
                ) : (
                    <p style={{ textAlign: "center", color: "#888" }}>
                        No more users available to add.
                    </p>
                )}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    sx={{
                        backgroundColor: "transparent",
                        color: "#645394",
                        "&:hover": {
                            backgroundColor: "#e0d7f5",
                        },
                    }}
                >
                    Cancel
                </Button>

                <Button
                    onClick={handleAddMember}
                    variant="contained"
                    disabled={!selectedUser || availableUsers.length === 0} // ✅ Disable if no user selected
                    sx={{
                        backgroundColor: selectedUser ? "#645394" : "#ccc", // Gray out if disabled
                        "&:hover": {
                            backgroundColor: selectedUser ? "#4e3b80" : "#ccc",
                        },
                    }}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
};

export default Members;