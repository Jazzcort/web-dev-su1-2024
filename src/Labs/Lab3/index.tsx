import ArrowFunctions from "./ArrowFunctions"
import BooleanVariables from "./BooleanVariables"
import ConditionalOutputIfElse from "./ConditionalOutputIfElse"
import ConditionalOutputInLine from "./ConditionalOutputInLine"
import IfElse from "./IfElse"
import ImpliedReturn from "./ImpliedReturn"
import LegacyFunctions from "./LegacyFunctions"
import TernaryOperator from "./TernaryOperator"
import VariableTypes from "./VariableTypes"
import VariablesAndConstants from "./VariablesAndConstants"
export default function Lab3() {
    return (
        <div id="wd-lab3" className="container-fluid">
            <h3>Lab3</h3>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInLine />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            
        </div>
    )
}