// import TestTournament from "../entities/testComponents/testComponents/TestTournament"
import TestTypography from "../entities/testComponents/testComponents/TestTypography"

import { Typography } from '@mui/material';

const TestPage: React.FC = () => {

  return (
    <>
      <Typography variant='h5' color="secondary"> Test Page </Typography>
      <br />

      {/* <TestTournament /> */}

      <br />
      <TestTypography />
    </>
  )
}

export default TestPage
