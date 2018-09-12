import * as ActionTypes from './AppConstants';
import ReducerRegistry from './store/index';
import { AdvisorStore } from './AppReducer';

import impactedSystemsData from '../mockData/actions-types-ids_impacted-systems';
import mediumRiskRulesData from '../mockData/medium-risk';

ReducerRegistry.register({ AdvisorStore });

const impactedSystems = () => JSON.parse(JSON.stringify(impactedSystemsData));
const mediumRiskRules = () => JSON.parse(JSON.stringify(mediumRiskRulesData));

export const fetchImpactedSystems = ()  => ({
    type: ActionTypes.IMPACTED_SYSTEMS_FETCH,
    payload: new Promise(resolve => {
        resolve(impactedSystems);
    })
});
export const fetchMediumRiskRules = ()  => ({
    type: ActionTypes.MEDIUM_RISK_RULES_FETCH,
    payload: new Promise(resolve => {
        resolve(mediumRiskRules);
    })
});
