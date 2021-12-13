import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, Title, Desc, DescSpan } from "../components/text/Text";
import { FormInput, FormCheckbox } from "../components/form/Form";
import Button from "../components/button/Button";
import { useInput } from "rooks";

export default function CreateToken(props: any) {
  const tokenSymbol = useInput('');
  const tokenSupply = useInput('');
  const tokenName = useInput('');
  const tokenDecimal = useInput('');
  const tokenBurn = useInput(false);
  const tokenBurnValue = useInput('');
  const tokenTradingFee = useInput(false);
  const tokenTradingFeeValue = useInput('');
  const tokenSupportSupplyIncrease = useInput(false);
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    alert(`Submitting Form ${tokenSymbol} ${tokenSupply}`);
    // reset();
  }
  return (
    <>
      <Navigationbar />
      <div className="container h-100">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto">
            <PageTitle value={'No coding required. '} variant={'dark'} />
            <PageTitle value={'Create your own tokens with one click!'} variant={'dark'} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* Create Token Form - Start */}
            <form onSubmit={handleSubmit} className="px-4 py-4 my-5 formBackgroundDesign">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Title variant={'dark'} value={'Enter Token Parameters:'} ></Title>
                </div>
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="1-16 Characters" label={'Token Symbol'} {...tokenSymbol} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="0-99,999,999,999,999,999" label={'Token Supply'} {...tokenSupply} />

                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="1-64 Characters" label={'Token Name'} {...tokenName} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="0-18" label={'Decimals'} {...tokenDecimal} />

                <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-2">
                  <Title variant={'dark'} value={'Special Features:'}></Title>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox className='col-lg-10 col-md-10 col-sm-10 my-2' label='Burn' {...tokenBurn} />
                  <Desc className="form-check-label" value={'A percentage of tokens will be sent to the burn address for each on-chain transfer'} variant={'dark'} />
                </div>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2" placeholder="0.1%" id="burnPercent" name="burnPercent" {...tokenBurnValue} />
                <div className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox id="exampleCheck1" label='Trading Fees' {...tokenTradingFee} />
                  <Desc className="form-check-label" value={'A percentage of tokens will be sent to the creators address for each on-chain transfer'} variant={'dark'} />
                </div>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2" placeholder="0.1%" id="tradingFeePercent" name="tradingFeePercent" {...tokenTradingFeeValue} />
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <FormCheckbox id="exampleCheck1" label='Supports Supply Increase' {...tokenSupportSupplyIncrease} />
                  <Desc className="form-check-label" value={'Allows the creator to issue additional tokens after the token creation'} variant={'dark'} />
                </div>
              </div>
              <div className="row justify-content-center mx-5 mt-3">
                <a href='/#' data-bs-toggle="modal" data-bs-target="#PrevieCreateToken" className="row justify-content-center">
                  <Button type="submit" label={'Connect Wallet'} variant="primary" />
                </a>
              </div>
            </form>
            {/* Create Token Form - End */}
          </div>
          <Title className="mt-5" value={'My Token List'} variant={'dark'} />
          {/* List Of Tokens Previously Created By The Logged-in User - Start */}
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th>#</th>
                  <th>Token Symbol</th>
                  <th>Token Name</th>
                  <th>Total Supply</th>
                  <th>Holders</th>
                  <th>Balance</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>SOL</td>
                  <td>Solana</td>
                  <td>1,000,000,000,000</td>
                  <td>7,000</td>
                  <td>678,987</td>
                  <td>
                    <a className="btn btn-primary" href="/manage-token">Manage</a>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Rune</td>
                  <td>Thor coin</td>
                  <td>1,000,000,000</td>
                  <td>15,000</td>
                  <td>788,334</td>
                  <td>
                    <a className="btn btn-primary" href="/manage-token">Manage</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* List Of Tokens Previously Created By The Logged-in User - End */}
        </div>
      </div>
      <BottomBar />
      {/* Confirmation Modal To Show Create Token Data Before Submitting - Start */}
      <div className="modal fade" id="PrevieCreateToken" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Title variant={'dark'} value={'Token Create Confirmation'}></Title>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row my-2">
                  <Desc value={'Token Symbol: ' + tokenSymbol.value} variant={'dark'} className="mb-3" />
                  <Desc value={'Token Supply: ' + tokenSupply.value} variant={'dark'} className="mb-3" />
                  <Desc value={'Token Name: ' + tokenName.value} variant={'dark'} className="mb-3" />
                  <Desc value={'Decimals: ' + tokenDecimal.value} variant={'dark'} className="mb-3" />
                  <div className="col-12 mb-3">
                    <DescSpan value={'Burn: '} variant={'dark'} />
                    {
                      tokenBurn.value === false ? (
                        <DescSpan value={'No'} variant={'dark'} />
                      ) : (
                        <DescSpan value={'Yes - ' + tokenBurnValue.value + ' %'} variant={'dark'} />
                      )
                    }
                  </div>
                  <div className="col-12 mb-3">
                    <DescSpan value={'Trading Fees: '} variant={'dark'}/>
                    {
                      tokenTradingFee.value === false ? (
                        <DescSpan value={'No'} variant={'dark'} />
                      ) : (
                        <DescSpan value={'Yes - ' + tokenTradingFeeValue.value + ' %'} variant={'dark'} />
                      )
                    }
                  </div>
                  <div className="col-12 mb-3">
                    <DescSpan value={'Supports Supply Increase: '} variant={'dark'} />
                    {
                      tokenSupportSupplyIncrease.value === false ? (
                        <DescSpan value={'No'} variant={'dark'} />
                      ) : (
                        <DescSpan value={'Yes'} variant={'dark'} />
                      )
                    }
                  </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button type="submit" label={'Continue Editing'} variant="primary" data-bs-dismiss="modal" />
              <Button type="submit" label={'Deploy / Finish'} variant="primary" data-bs-dismiss="modal" />
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal To Show Create Token Data Before Submitting - End */}
    </>
  )
}