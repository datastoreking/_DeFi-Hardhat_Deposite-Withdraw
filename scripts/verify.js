const console = require('console')
const hre = require('hardhat')

async function main() {
  
  // We can use other contract addresses to verify others
  await hre.run('verify:verify', {
    address: '0x77c63EAC6Eb98746e533d128a811b8819A10b76b',
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })