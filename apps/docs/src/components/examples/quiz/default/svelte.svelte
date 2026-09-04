<!-- apps/docs/src/components/examples/quiz/default/svelte.svelte -->
<script lang="ts">
  import { Quiz } from '@cloudvoyant/vortex-svelte';
  import type { Question } from '@cloudvoyant/vortex-ui';

  const questions: Question[] = [
    {
      id: 'a1',
      type: 'single',
      prompt: 'Which runs JS outside the browser?',
      choices: ['Python', 'Node.js', 'Go'],
      correct: 1,
    },
    {
      id: 'a2',
      type: 'numeric',
      prompt: 'What is 3 × 3?',
      answer: 9,
    },
  ];
</script>

<Quiz id="quiz-demo" title="Quick check" {questions} />
