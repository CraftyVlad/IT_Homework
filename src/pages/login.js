import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Login({ initialUsername, initialPassword }) {
	const [username, setUsername] = useState(initialUsername);
	const [password, setPassword] = useState(initialPassword);
	const [isEditing, setIsEditing] = useState(false);

	const handleSave = () => {
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<div>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button onClick={handleSave}>Save</button>
			</div>
		);
	}

	return (
		<div>
			<Link href={`/`}>Restaurant page (task 1)</Link>
			<p>Username: {username}</p>
			<p>Password: {password}</p>
			<button onClick={() => setIsEditing(true)}>Edit</button>
		</div>
	);
}

Login.propTypes = {
	initialUsername: PropTypes.string.isRequired,
	initialPassword: PropTypes.string.isRequired,
};

export default Login;
