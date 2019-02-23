() => {

  function Werewolf() {

    const [ isWolf, setWolf ] = useState();

    return <div onClick={() => setWolf(!isWolf)}>
      {isWolf ? '🐺' : '👨'}
    </div>
  }

  function Vampire() {

    const [ isVampire, setVampire ] = useState();

    return <div onClick={() => setVampire(!isVampire)}>
      {isVampire ? '🧛‍♀️' : '👩'}
    </div>
  }

  return <>
    <Werewolf />
    <Vampire />
  </>

}