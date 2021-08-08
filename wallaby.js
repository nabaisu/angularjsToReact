export default function (wallaby) {
  return {
    autoDetect: true,
    env: {
      params: {
        runner: "--experimental-vm-modules",
      },
    },
  };
}
