const links = [
  {
    id: 1,
    url: './home',
    text: 'home',
  },
  {
    id: 1,
    url: './about',
    text: 'about',
  },
  {
    id: 1,
    url: './contact',
    text: 'contact',
  },
  {
    id: 1,
    url: './store',
    text: 'store',
  },
  {
    id: 1,
    url: './checkout',
    text: 'checkout',
  },
];
const linksHTML = links.map((links) => {
  return (
    <li>
      <a href={links.url}>{links.text}</a>
    </li>
  );
});
export default linksHTML;
