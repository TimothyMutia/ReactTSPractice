interface menu_Item{
    title:string;
    url:string
}


const menu_Items:menu_Item[] = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About Me',
        url: '/About'
    },
    {
        title: 'Learn',
        url: '/Learn'
    },
    {
        title: 'Contact Me',
        url: '/Contact'
    },

]

export default menu_Items