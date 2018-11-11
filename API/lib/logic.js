/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
* Sample transaction
* @param {api.OrganTransfer} organTransfer
* @transaction
*/
function organTransfer(organTransfer) {
    if (organTransfer.from.bloodGroup != organTransfer.to.bloodGroup) {
    throw new Error ("Invalid Transfer: The blood group of receiver and donor is not matching.");
    }
    if (organTransfer.from.organToDonate != organTransfer.to.requiredOrgan) {
        throw new Error ("Invalid Transfer: The donated and required organs should be the same.")
    }
    organTransfer.from.donated = true;
    organTransfer.to.received = true;
    organTransfer.from.priorityPoints += organTransfer.rewardPonits;
    return getParticipantRegistry('api.Donor')
    .then (function (participantRegistry) {
    return participantRegistry.update(organTransfer.from);
    })
    .then (function () {
    return getParticipantRegistry('api.Receiver');
    })
    .then(function (participantRegistry) {
    return participantRegistry.update(organTransfer.to);
    });
    }
