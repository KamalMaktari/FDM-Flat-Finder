import styles from '../styles/Home.module.css'

export default function loginScreen(){
    return(
        <div class = {styles.loginContainer}>
            <div class ={styles.loginBox}>
                <label for='userName'>Email:</label>
                <input type='text' id = 'userName' class="userName"></input><br></br>
                <label for='password'>Password:</label>
                <input type='text' id = 'password' class={styles.password}></input><br></br>
                <input type='submit'></input>
            </div>
        </div>
    );
}