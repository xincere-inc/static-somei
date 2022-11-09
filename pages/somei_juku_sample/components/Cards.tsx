import styles from "./cards.module.scss"

export const Card = () => {
  return (
    <div className={styles.mount}>
      <div className="row" style={{boxSizing: "border-box"}}>
        <div className="col-12 col-md">
          <img src="/favicon.ico" alt="" className={styles.image}/>
        </div>
        <div className="col-12 col-md">
          <h1>Sample Card</h1>
          <div>sample content</div>
        </div>
      </div>
    </div>
  )
}