interface IProps {
  active?: boolean;
}

export const OverviewIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 14.3333V15.0833H12.4167V14.3333H11.6667ZM11.6667 1H12.4167V0.25H11.6667V1ZM1 1V0.25H0.25V1H1ZM11.6667 25V25.75H12.4167V25H11.6667ZM11.6667 17H12.4167V16.25H11.6667V17ZM1 17V16.25H0.25V17H1ZM25 25V25.75H25.75V25H25ZM25 11.6667H25.75V10.9167H25V11.6667ZM14.3333 11.6667V10.9167H13.5833V11.6667H14.3333ZM14.3333 9H13.5833V9.75H14.3333V9ZM25 9V9.75H25.75V9H25ZM25 1H25.75V0.25H25V1ZM1 15.0833H11.6667V13.5833H1V15.0833ZM12.4167 14.3333V1H10.9167V14.3333H12.4167ZM11.6667 0.25H1V1.75H11.6667V0.25ZM0.25 1V14.3333H1.75V1H0.25ZM1 25.75H11.6667V24.25H1V25.75ZM12.4167 25V17H10.9167V25H12.4167ZM11.6667 16.25H1V17.75H11.6667V16.25ZM0.25 17V25H1.75V17H0.25ZM14.3333 25.75H25V24.25H14.3333V25.75ZM25.75 25V11.6667H24.25V25H25.75ZM25 10.9167H14.3333V12.4167H25V10.9167ZM13.5833 11.6667V25H15.0833V11.6667H13.5833ZM13.5833 1V9H15.0833V1H13.5833ZM14.3333 9.75H25V8.25H14.3333V9.75ZM25.75 9V1H24.25V9H25.75ZM25 0.25H14.3333V1.75H25V0.25Z"
        fill={fill}
      />
      <mask
        id="mask0_3102_14"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="26"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 14.3333H11.6667V1H1V14.3333ZM1 25H11.6667V17H1V25ZM14.3333 25H25V11.6667H14.3333V25ZM14.3333 1V9H25V1H14.3333Z"
          fill="white"
        />
        <path
          d="M11.6667 14.3333V15.0833H12.4167V14.3333H11.6667ZM11.6667 1H12.4167V0.25H11.6667V1ZM1 1V0.25H0.25V1H1ZM11.6667 25V25.75H12.4167V25H11.6667ZM11.6667 17H12.4167V16.25H11.6667V17ZM1 17V16.25H0.25V17H1ZM25 25V25.75H25.75V25H25ZM25 11.6667H25.75V10.9167H25V11.6667ZM14.3333 11.6667V10.9167H13.5833V11.6667H14.3333ZM14.3333 9H13.5833V9.75H14.3333V9ZM25 9V9.75H25.75V9H25ZM25 1H25.75V0.25H25V1ZM1 15.0833H11.6667V13.5833H1V15.0833ZM12.4167 14.3333V1H10.9167V14.3333H12.4167ZM11.6667 0.25H1V1.75H11.6667V0.25ZM0.25 1V14.3333H1.75V1H0.25ZM1 25.75H11.6667V24.25H1V25.75ZM12.4167 25V17H10.9167V25H12.4167ZM11.6667 16.25H1V17.75H11.6667V16.25ZM0.25 17V25H1.75V17H0.25ZM14.3333 25.75H25V24.25H14.3333V25.75ZM25.75 25V11.6667H24.25V25H25.75ZM25 10.9167H14.3333V12.4167H25V10.9167ZM13.5833 11.6667V25H15.0833V11.6667H13.5833ZM13.5833 1V9H15.0833V1H13.5833ZM14.3333 9.75H25V8.25H14.3333V9.75ZM25.75 9V1H24.25V9H25.75ZM25 0.25H14.3333V1.75H25V0.25Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3102_14)"></g>
    </svg>
  );
};

export const MarketIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="29"
      height="26"
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4375 8.375L16.0156 15.7969L12.1094 11.8906L6.25 17.75"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M1.17188 0.390625V24.6094" stroke={fill} strokeWidth="1.5" />
      <path d="M0.390625 24.6094H28.5156" stroke={fill} strokeWidth="1.5" />
      <path
        d="M18.75 8.375H23.4375V13.0625"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PortfolioIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="7"
        width="26"
        height="17"
        rx="2"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 24V3.55556C19 2.14416 17.8807 1 16.5 1H11.5C10.1193 1 9 2.14416 9 3.55556V24"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CommunityIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 23V20.6667C21 18.0893 18.7614 16 16 16H6C3.23858 16 1 18.0893 1 20.6667V23"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="6"
        r="5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 23V20.615C26.9982 18.4412 25.3533 16.5434 23 16"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 1C20.3537 1.52626 22 3.37831 22 5.5C22 7.62169 20.3537 9.47374 18 10"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ReportIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="24"
      height="29"
      viewBox="0 0 24 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.375 1H3.75C2.23122 1 1 2.20883 1 3.7V25.3C1 26.7912 2.23122 28 3.75 28H20.25C21.7688 28 23 26.7912 23 25.3V10.45L13.375 1Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 1V11H23"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SettingsIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="4"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.4182 18.8182C24.0716 19.6036 24.2379 20.5209 24.8382 21.1345L24.9145 21.2109C25.3925 21.6884 25.6611 22.3362 25.6611 23.0118C25.6611 23.6874 25.3925 24.3353 24.9145 24.8127C24.4371 25.2907 23.7892 25.5593 23.1136 25.5593C22.438 25.5593 21.7902 25.2907 21.3127 24.8127L21.2364 24.7364C20.6227 24.1361 19.7054 23.9697 18.92 24.3164C18.1507 24.6461 17.6506 25.4012 17.6473 26.2382V26.4545C17.6473 27.8604 16.5076 29 15.1018 29C13.696 29 12.5564 27.8604 12.5564 26.4545V26.34C12.5362 25.4779 11.9911 24.7158 11.1818 24.4182C10.3964 24.0716 9.47915 24.2379 8.86545 24.8382L8.78909 24.9145C8.31164 25.3925 7.66377 25.6611 6.98818 25.6611C6.31259 25.6611 5.66472 25.3925 5.18727 24.9145C4.70929 24.4371 4.44072 23.7892 4.44072 23.1136C4.44072 22.438 4.70929 21.7902 5.18727 21.3127L5.26364 21.2364C5.86394 20.6227 6.03026 19.7054 5.68364 18.92C5.35391 18.1507 4.59882 17.6506 3.76182 17.6473H3.54545C2.13964 17.6473 1 16.5076 1 15.1018C1 13.696 2.13964 12.5564 3.54545 12.5564H3.66C4.52206 12.5362 5.28417 11.9911 5.58182 11.1818C5.92844 10.3964 5.76212 9.47915 5.16182 8.86545L5.08545 8.78909C4.60748 8.31164 4.33891 7.66377 4.33891 6.98818C4.33891 6.31259 4.60748 5.66472 5.08545 5.18727C5.5629 4.70929 6.21078 4.44072 6.88636 4.44072C7.56195 4.44072 8.20983 4.70929 8.68727 5.18727L8.76364 5.26364C9.37733 5.86394 10.2946 6.03026 11.08 5.68364H11.1818C11.9511 5.35391 12.4512 4.59882 12.4545 3.76182V3.54545C12.4545 2.13964 13.5942 1 15 1C16.4058 1 17.5455 2.13964 17.5455 3.54545V3.66C17.5488 4.497 18.0489 5.25209 18.8182 5.58182C19.6036 5.92844 20.5209 5.76212 21.1345 5.16182L21.2109 5.08545C21.6884 4.60748 22.3362 4.33891 23.0118 4.33891C23.6874 4.33891 24.3353 4.60748 24.8127 5.08545C25.2907 5.5629 25.5593 6.21078 25.5593 6.88636C25.5593 7.56195 25.2907 8.20983 24.8127 8.68727L24.7364 8.76364C24.1361 9.37733 23.9697 10.2946 24.3164 11.08V11.1818C24.6461 11.9511 25.4012 12.4512 26.2382 12.4545H26.4545C27.8604 12.4545 29 13.5942 29 15C29 16.4058 27.8604 17.5455 26.4545 17.5455H26.34C25.503 17.5488 24.7479 18.0489 24.4182 18.8182Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ProductViewIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#1E1E1E";
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1L9.52275 7.59723L6.11363 4.125L1 9.33333"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8333 1H16V5.16667"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const OrderBookIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "black";
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 14.125C1 13.0895 1.83947 12.25 2.875 12.25H13"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.875 1H13V16H2.875C1.83947 16 1 15.1605 1 14.125V2.875C1 1.83947 1.83947 1 2.875 1Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PriceHistoryIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "black";
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.42857 7.45242C2.42857 3.42868 5.6905 0.166748 9.71429 0.166748C13.7381 0.166748 17 3.42868 17 7.45242C17 11.4762 13.7381 14.7381 9.71429 14.7381C7.69048 14.7381 5.88524 13.9286 4.56571 12.601L5.71524 11.4515C6.73524 12.4796 8.15191 13.1191 9.71429 13.1191C12.8439 13.1191 15.381 10.582 15.381 7.45242C15.381 4.32285 12.8439 1.7858 9.71429 1.7858C6.58467 1.7858 4.04762 4.32285 4.04762 7.45242H6.47619L3.20571 10.7148L0 7.45242H2.42857ZM8.90476 4.21438H10.119V7.65488L12.9524 9.33869L12.3695 10.3182L8.90476 8.26203V4.21438Z"
        fill={fill}
      />
    </svg>
  );
};
export const OpenOrdersIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "black";
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.81818C1 6.81818 3.90909 1 9 1C14.0909 1 17 6.81818 17 6.81818C17 6.81818 14.0909 12.6364 9 12.6364C3.90909 12.6364 1 6.81818 1 6.81818Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="6.81817"
        r="2.18182"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ClosedTradesIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "#262626";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM6.4 9.736L11.672 4.464L12.8 5.6L6.4 12L3.2 8.8L4.328 7.672L6.4 9.736Z"
        fill={fill}
      />
    </svg>
  );
};
export const CancelledTradesIcon = ({ active }: IProps) => {
  const fill = active ? "red" : "black";
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="7.5"
        stroke={fill}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7494 6.24963L6.2494 10.7496"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M6.2494 6.24963L10.7494 10.7496"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
