const { Box } = require("@mui/system");
const {styled} = require('@mui/system')


const FlexBetween = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
});
export default FlexBetween;