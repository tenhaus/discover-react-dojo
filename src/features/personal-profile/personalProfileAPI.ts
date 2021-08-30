import { Profile } from "./personalProfileTypes";

export function fetchProfile() {
    return new Promise<{ data: Profile }>((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then((response) => {
                resolve({
                    data: {
                        fname: response.name.split(" ")[0],
                        lname: response.name.split(" ")[1],
                        email: response.email,
                        phone: response.phone,
                        username: response.username
                    }
                })
            })
    });
}

export function postProfile(profile: Profile) {
    return new Promise<{ data: Profile }>((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: profile.fname + ' ' + profile.lname,
                email: profile.email,
                phone: profile.phone,
                username: profile.username
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                resolve({ data: profile })
            })
    });
}
