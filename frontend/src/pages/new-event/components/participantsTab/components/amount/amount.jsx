import {HighlightedText, Input, PinkLayer, WhiteLayer} from "../../../../../../components";
import styled from "styled-components";

const AmountContainer = ({className, amountFrom, amountTo, handleChange}) => {
    return (
        <WhiteLayer className={className}>
            <HighlightedText>Количество участников *</HighlightedText>
            <PinkLayer width="400px">
                <div className="amount">
                    <Input
                        type="number"
                        name="amountFrom"
                        min={0}
                        value={amountFrom}
                        placeholder="От"
                        onChange={handleChange}
                        variant="accent"
                    />
                    <Input
                        type="number"
                        name="amountTo"
                        value={amountTo}
                        placeholder="До"
                        onChange={handleChange}
                        variant="accent"
                    />
                </div>
            </PinkLayer>
        </WhiteLayer>
    )
}

export const Amount = styled(AmountContainer)`

  .amount {
    display: flex;
    justify-content: center;
  }

`