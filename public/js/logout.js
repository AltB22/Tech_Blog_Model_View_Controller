// add async logout function
const logout = async () => {
	const response = await fetch("/api/user/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		document.location.replace("/");
	} else {
		alert(response.statusText);
	}
};

document.getElementById("#logout-btn").addEventListener("submit", logout);
