export default function Tabs({children, buttons}) {
      return(
            <>
                  <menu>{buttons}</menu>
                  <h2>{children}</h2>
            </>
      )
}