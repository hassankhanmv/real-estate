import { Button } from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons-react";

function GoogleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 36 36"
      style={{ width: "0.9rem", height: "0.9rem" }}
      {...props}
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#18AFFF" />
          <stop offset="100%" stop-color="#0062DF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M36 18c0-9.94-8.06-18-18-18S0 8.06 0 18c0 8.99 6.62 16.43 15.27 17.79v-12.57h-4.58v-5.22h4.58v-3.99c0-4.53 2.74-7.01 6.74-7.01 1.92 0 3.58.14 4.06.2v4.7h-2.79c-2.19 0-2.61 1.04-2.61 2.57v3.35h5.24l-.68 5.22h-4.56v12.57C29.38 34.43 36 26.99 36 18z"
      />
      <path
        fill="#FFF"
        d="M24.83 22.78l.68-5.22h-5.24v-3.35c0-1.53.41-2.57 2.61-2.57h2.79v-4.7c-.48-.06-2.14-.2-4.06-.2-4 0-6.74 2.48-6.74 7.01v3.99h-4.58v5.22h4.58v12.57c1.48.24 3 .37 4.58.37s3.1-.13 4.58-.37v-12.57h4.56z"
      />
    </svg>
  );
}

export function FaceBookButton(props) {
  return (
    <Button
      mt={10}
      justify="space-between"
      fullWidth
      rightSection={<span />}
      leftSection={<GoogleIcon />}
      variant="default"
      {...props}
    />
  );
}
