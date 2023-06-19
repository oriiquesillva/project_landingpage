import { FiCheckCircle } from "react-icons/fi";
import Button from "../button/button";
import styles from "./sucess_modal.module.scss";


export function SuccessModal({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Dados enviados com sucesso, você será redirecionado para a página de pagamento.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button title="fechar" />
        </div>
      </div>
    </div>
  );
}