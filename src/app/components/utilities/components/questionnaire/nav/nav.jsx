
import styles from './nav.module.scss';
import { PrimaryButton, SecondaryButton } from '../buttons/buttons';

export const Navbar = (props) => {
    return <>
        <div className={styles.navheader}>
            <SecondaryButton onClick={()=>{
                props.onGoBack(0);
            }} label={"< GO BACK"}/>
            
            <PrimaryButton onClick={props.onSave} checked={true} label={"SAVE & EXIT"} outlined={true}/>
          </div>
    </>
}