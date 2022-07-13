// styles
import styles from './NoData.module.scss';

// Default message values
//! NOTE for messageEmphasised: to highlight text, wrap in <span> tag
const fallback = {
  message: `🤕 We could not load this content and apologise for the inconvenience`,
  messageEmphasised: `Please check back in with us <span>later</span> ⏳`,
};

// NoData renders message to user indicating lack of data
const NoData = ({
  message = fallback.message,
  messageEmphasised = fallback.messageEmphasised,
}) => {
  return (
    <div className={styles['no-data']}>
      <p className={styles['no-data-message']}>{message}</p>
      <p
        className={styles['no-data-message-emphasised']}
        dangerouslySetInnerHTML={{ __html: messageEmphasised }}
      />
    </div>
  );
};

export default NoData;
