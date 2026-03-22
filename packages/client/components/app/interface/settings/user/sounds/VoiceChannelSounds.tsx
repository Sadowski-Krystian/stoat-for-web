import { Trans } from "@lingui-solid/solid/macro";
import { useState } from "@revolt/state";
import { CategoryButton, Checkbox, Column, Text } from "@revolt/ui";

/**
 * Voice channel sound options
 */
export function VoiceChannelSounds() {
  const state = useState();

  return (
    <Column>
      <Text class="title">
        <Trans>Voice Channel Sounds</Trans>
      </Text>
      <CategoryButton.Group>
        <CategoryButton
          icon="blank"
          action={<Checkbox checked={state.voice.playJoinSound} />}
          onClick={() => {
            state.voice.playJoinSound = !state.voice.playJoinSound;
          }}
        >
          <Trans>Play Join Sound</Trans>
        </CategoryButton>
        <CategoryButton
          icon="blank"
          action={<Checkbox checked={state.voice.playLeaveSound} />}
          onClick={() => {
            state.voice.playLeaveSound = !state.voice.playLeaveSound;
          }}
        >
          <Trans>Play Leave Sound</Trans>
        </CategoryButton>
      </CategoryButton.Group>
    </Column>
  );
}