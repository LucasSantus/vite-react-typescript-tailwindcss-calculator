interface IconZeroProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconZero = (props: IconZeroProps) => (
  <svg
    width={14}
    height={19}
    viewBox="0 0 14 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.99 18.24c-1.103 0-2.04-.168-2.807-.504a5.024 5.024 0 01-1.848-1.44 5.984 5.984 0 01-1.056-2.088 11.312 11.312 0 01-.36-2.496L.87 10.344v-1.44l.048-1.416c.016-.88.136-1.712.36-2.496.24-.8.592-1.496 1.056-2.088.48-.608 1.104-1.08 1.872-1.416C4.975 1.136 5.903.96 6.99.96c1.104 0 2.032.176 2.784.528.768.336 1.392.808 1.872 1.416a5.72 5.72 0 011.056 2.088 9.05 9.05 0 01.384 2.496c.016.448.024.92.024 1.416.016.48.016.96 0 1.44 0 .48-.008.936-.024 1.368a9.05 9.05 0 01-.384 2.496 5.984 5.984 0 01-1.056 2.088c-.464.608-1.08 1.088-1.848 1.44-.752.336-1.688.504-2.808.504zm0-2.04c1.249 0 2.169-.408 2.76-1.224.609-.832.92-1.96.937-3.384.032-.464.048-.912.048-1.344v-1.32c0-.448-.016-.888-.048-1.32-.016-1.392-.328-2.504-.936-3.336C9.159 3.424 8.239 3 6.99 3c-1.232 0-2.152.424-2.76 1.272-.592.832-.904 1.944-.936 3.336 0 .432-.008.872-.024 1.32v1.32c.016.432.024.88.024 1.344.032 1.424.352 2.552.96 3.384.608.816 1.52 1.224 2.736 1.224z"
      fill="currentColor"
    />
  </svg>
);