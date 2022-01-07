
from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.forms import FormValidationAction
from rasa_sdk.types import DomainDict


# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

# https://rasa.com/docs/rasa/custom-actions


# class SayInputUserVacinas(FormValidationAction):

#     def name(self) -> Text:
#         # define o nome da action
#         return "validate_inputUser_form"

#     def validate_inputUser(self, slot_value: Any, dispatcher: CollectingDispatcher, tracker: Tracker,
#             domain: DomainDict) -> Dict[Text, Any]:

#         return {}
