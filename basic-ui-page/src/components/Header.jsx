import reactImage from '../assets/react-core-concepts.png'
const description = ['Core', 'Curcial']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1))
}

export function Header () {
      const data = description[getRandomInt(1)];
      return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
              {data} React concepts you will need for almost any app you are
              going to build!
            </p>
          </header>
      )
}

export function CoreConcepts({title, image, description}) {
      return (
        <li>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      )
}

export function TabButton ({children, onSelect, isSelected}) {
      return (
      <li>
            <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
      </li>
      )
}