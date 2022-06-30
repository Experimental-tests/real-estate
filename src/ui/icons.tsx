import classNames from 'classnames'

const MenuIcon = () => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
    <path
      d="M35.3333 0H0.666584V4.33333H35.3333V0ZM26.6666 10.8333H0.666584V15.1667H26.6666V10.8333ZM15.8333 21.6667H0.666584V26H15.8333V21.6667Z"
      fill="#E0010E"
    />
  </svg>
)

const PinIcon = ({ size = 'default' }: { size?: 'default' | 'large' }) => (
  <svg
    viewBox="0 0 8 10"
    className={classNames({
      'min-w-[8px] w-[8px] min-h-[10px] h-[10px] inline-block':
        size === 'default',
      'min-w-[14px] w-[14px] min-h-[18px] h-[18px] inline-block':
        size === 'default',
    })}
  >
    <path
      d="M4.31256 0.664307C3.34424 0.665449 2.4159 1.05062 1.73119 1.73533C1.04647 2.42004 0.661302 3.34838 0.66016 4.31671C0.659 5.10803 0.917482 5.87787 1.39595 6.50815C1.39595 6.50815 1.49556 6.63931 1.51183 6.65823L4.31256 9.96133L7.11462 6.65657C7.12923 6.63897 7.22917 6.50815 7.22917 6.50815L7.22951 6.50716C7.70774 5.87715 7.9661 5.10766 7.96497 4.31671C7.96383 3.34838 7.57865 2.42004 6.89394 1.73533C6.20923 1.05062 5.28089 0.665449 4.31256 0.664307ZM4.31256 5.64486C4.04988 5.64486 3.7931 5.56696 3.57469 5.42102C3.35627 5.27508 3.18604 5.06766 3.08552 4.82497C2.98499 4.58228 2.95869 4.31524 3.00994 4.0576C3.06118 3.79997 3.18768 3.56331 3.37342 3.37757C3.55917 3.19182 3.79582 3.06533 4.05346 3.01408C4.31109 2.96284 4.57814 2.98914 4.82082 3.08966C5.06351 3.19019 5.27094 3.36042 5.41688 3.57883C5.56282 3.79724 5.64071 4.05403 5.64071 4.31671C5.64027 4.66882 5.5002 5.00639 5.25122 5.25537C5.00224 5.50435 4.66468 5.64442 4.31256 5.64486Z"
      fill="#E0010E"
    />
  </svg>
)

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 9.8999C0.632608 9.8999 0.759785 9.95258 0.853553 10.0463C0.947322 10.1401 1 10.2673 1 10.3999V12.8999C1 13.1651 1.10536 13.4195 1.29289 13.607C1.48043 13.7945 1.73478 13.8999 2 13.8999H14C14.2652 13.8999 14.5196 13.7945 14.7071 13.607C14.8946 13.4195 15 13.1651 15 12.8999V10.3999C15 10.2673 15.0527 10.1401 15.1464 10.0463C15.2402 9.95258 15.3674 9.8999 15.5 9.8999C15.6326 9.8999 15.7598 9.95258 15.8536 10.0463C15.9473 10.1401 16 10.2673 16 10.3999V12.8999C16 13.4303 15.7893 13.939 15.4142 14.3141C15.0391 14.6892 14.5304 14.8999 14 14.8999H2C1.46957 14.8999 0.960859 14.6892 0.585786 14.3141C0.210714 13.939 0 13.4303 0 12.8999V10.3999C0 10.2673 0.0526784 10.1401 0.146447 10.0463C0.240215 9.95258 0.367392 9.8999 0.5 9.8999Z"
      fill="#E0010E"
    />
    <path
      d="M7.6459 11.854C7.69234 11.9006 7.74752 11.9375 7.80827 11.9627C7.86901 11.9879 7.93413 12.0009 7.9999 12.0009C8.06567 12.0009 8.13079 11.9879 8.19153 11.9627C8.25228 11.9375 8.30745 11.9006 8.3539 11.854L11.3539 8.854C11.4478 8.76011 11.5005 8.63278 11.5005 8.5C11.5005 8.36722 11.4478 8.23989 11.3539 8.146C11.26 8.05211 11.1327 7.99937 10.9999 7.99937C10.8671 7.99937 10.7398 8.05211 10.6459 8.146L8.4999 10.293V1.5C8.4999 1.36739 8.44722 1.24021 8.35345 1.14645C8.25969 1.05268 8.13251 1 7.9999 1C7.86729 1 7.74011 1.05268 7.64635 1.14645C7.55258 1.24021 7.4999 1.36739 7.4999 1.5V10.293L5.3539 8.146C5.26001 8.05211 5.13268 7.99937 4.9999 7.99937C4.86712 7.99937 4.73979 8.05211 4.6459 8.146C4.55201 8.23989 4.49927 8.36722 4.49927 8.5C4.49927 8.63278 4.55201 8.76011 4.6459 8.854L7.6459 11.854Z"
      fill="#E0010E"
    />
  </svg>
)

const LoveIcon = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3334 1C13.1741 1 14.6667 2.47733 14.6667 4.3C14.6667 5.77133 14.0834 9.26333 8.34142 12.7933C8.23856 12.8559 8.12048 12.889 8.00008 12.889C7.87968 12.889 7.7616 12.8559 7.65875 12.7933C1.91675 9.26333 1.33342 5.77133 1.33342 4.3C1.33342 2.47733 2.82608 1 4.66675 1C6.50742 1 8.00008 3 8.00008 3C8.00008 3 9.49275 1 11.3334 1Z"
      stroke="#E0010E"
      strokeLinecap="round"
    />
  </svg>
)

const CommentIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8 0H1.2C0.5382 0 0 0.5382 0 1.2V12L3.1998 9.6H10.8C11.4618 9.6 12 9.0618 12 8.4V1.2C12 0.5382 11.4618 0 10.8 0ZM10.8 8.4H2.8002L1.2 9.6V1.2H10.8V8.4Z"
      fill="#E0010E"
    />
  </svg>
)

const ShareIcon = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.75 9.375C9.30469 9.375 8.89375 9.53125 8.57187 9.79219L5.33437 7.45C5.38859 7.15245 5.38859 6.84755 5.33437 6.55L8.57187 4.20781C8.89375 4.46875 9.30469 4.625 9.75 4.625C10.7844 4.625 11.625 3.78437 11.625 2.75C11.625 1.71563 10.7844 0.875 9.75 0.875C8.71562 0.875 7.875 1.71563 7.875 2.75C7.875 2.93125 7.9 3.10469 7.94844 3.27031L4.87344 5.49687C4.41719 4.89219 3.69219 4.5 2.875 4.5C1.49375 4.5 0.375 5.61875 0.375 7C0.375 8.38125 1.49375 9.5 2.875 9.5C3.69219 9.5 4.41719 9.10781 4.87344 8.50313L7.94844 10.7297C7.9 10.8953 7.875 11.0703 7.875 11.25C7.875 12.2844 8.71562 13.125 9.75 13.125C10.7844 13.125 11.625 12.2844 11.625 11.25C11.625 10.2156 10.7844 9.375 9.75 9.375ZM9.75 1.9375C10.1984 1.9375 10.5625 2.30156 10.5625 2.75C10.5625 3.19844 10.1984 3.5625 9.75 3.5625C9.30156 3.5625 8.9375 3.19844 8.9375 2.75C8.9375 2.30156 9.30156 1.9375 9.75 1.9375ZM2.875 8.375C2.11719 8.375 1.5 7.75781 1.5 7C1.5 6.24219 2.11719 5.625 2.875 5.625C3.63281 5.625 4.25 6.24219 4.25 7C4.25 7.75781 3.63281 8.375 2.875 8.375ZM9.75 12.0625C9.30156 12.0625 8.9375 11.6984 8.9375 11.25C8.9375 10.8016 9.30156 10.4375 9.75 10.4375C10.1984 10.4375 10.5625 10.8016 10.5625 11.25C10.5625 11.6984 10.1984 12.0625 9.75 12.0625Z"
      fill="#E0010E"
    />
  </svg>
)

const PrevIcon = () => (
  <svg
    width="10"
    height="17"
    viewBox="0 0 10 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="8.84208"
      y1="0.304955"
      x2="1.31711"
      y2="8.13156"
      stroke="black"
      strokeWidth="0.88"
    />
    <line
      x1="8.62522"
      y1="15.7669"
      x2="0.695751"
      y2="8.14301"
      stroke="black"
      strokeWidth="0.88"
    />
  </svg>
)

const NextICon = () => (
  <svg
    width="10"
    height="17"
    viewBox="0 0 10 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="1.23541"
      y1="16.1432"
      x2="8.68389"
      y2="8.24378"
      stroke="black"
      strokeWidth="0.88"
    />
    <line
      x1="1.30186"
      y1="0.67987"
      x2="9.30512"
      y2="8.22625"
      stroke="black"
      strokeWidth="0.88"
    />
  </svg>
)

export {
  MenuIcon,
  PinIcon,
  DownloadIcon,
  LoveIcon,
  CommentIcon,
  ShareIcon,
  NextICon,
  PrevIcon,
}
