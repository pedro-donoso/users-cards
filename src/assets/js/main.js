/*
const button = document.getElementById('button1')

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users' // api tipo //   
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})
*/



/*
// metodo post incluye data

const button = document.getElementById('button2')

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts', // api tipo //  
        data: {
            title: 'A new post',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then(res => console.log(res.data))  
    .catch(err=> console.log(err))
})
*/

const getAxios = async (idPost) => {
    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data.name);
    } catch (error) {
        console.log(error);
    }
}

getAxios(80)