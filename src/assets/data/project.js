export const projects = [
    {
        id:1,
        title:"AutoEval of Handwritten True/False",
        description: "Built an automated evaluation pipeline for True/False answer sheets using Doctr OCR, leveraging table structure extraction for precise answer mapping.Enhanced system accuracy by handling rotation, skew, and noisy inputs, improving Mean Absolute Error (MAE) from 0.70 (PaddleOCR baseline) to 0.25. This model was presented in NCVPRIPG-2024 and secured 3rd place out of 125 teams.",
        image: "/projects/autoeval_tf_2.png",
        tags: ["",],
        demoUrl: "https://drive.google.com/file/d/14B62lWIYgO7HBX7AI60f9Pw-h59ofPwZ/view?usp=sharing",
        githubUrl: "https://github.com/adityarathor007/AutoHandwrittenEvalChallenge2024",
    },

      {
        id:2,
        title:"Deep Soccer",
        description: "Developed a computer vision framework using YOLO for real-time object detection, tracking, pitch landmark detection, and 2D projection via homography transformation. Visualized key gameplay insights including player control areas, ball trajectories, and ball possession analysis for tactical and performance evaluation.",
        image: "/projects/deep_soccer.png",
        tags: ["",],
        demoUrl: "https://drive.google.com/file/d/1FmonOj3RB6BXYNgmf_HLKj3CyqYzVQmJ/view?usp=sharing",
        githubUrl: "https://github.com/adityarathor007/DeepSoccer",
    },
    {
        id:3,
        title:"SpaceLink",
        description: "Developed a real-time screen sharing system with 60 FPS transmission using mss and client-side decoding via Pygame, ensuring smooth and efficient visualization.Implemented secure client authentication with dynamic passcodes and enabled remote mouse control of the source system using PyAutoGUI.",
        image: "/projects/spacelink.png",
        tags: ["",],
        demoUrl: "https://www.youtube.com/watch?v=XTnWsB9Afn4",
        githubUrl: "https://github.com/adityarathor007/SpaceLink",
    },

    {
        id:4,
        title:"3D Scene Reconstruction",
        description: "In this I had re-implemented Pix2Vox architecture for 3D object reconstruction, mapping 2D RGB images to 3D voxel grids and leveraging a context-aware fusion module for effective multi-view integration without pose estimation. Used ShapeNet (Rendering + Vox32) dataset with extensive data augmentations (cropping, jittering, Gaussian noise, flips, etc.) to improve model robustness and generalization. Achieved high-quality reconstructions with sharper boundaries and finer details by incorporating a discriminator during training so to ensure that reconstruction look closer to real models. This was novelty added in this which was not present in the Pix2Vox paper.",
        image: "/projects/pixto3d.png",
        tags: ["",],
        demoUrl: "https://drive.google.com/file/d/1904-O22tuyB89qT60p58dEpIaOZb_h9o/view?usp=sharing",
        githubUrl: "https://github.com/majisouvik26/3d-scene-reconstruction/",
    },

      {
        id:5,
        title:"Parabel with XML",
        description: "Enhanced the Parabel algorithm with adversarial training and explainability methods (Integrated Gradients, LIME) to improve resilience against adversarial attacks.Utilized IAPRTC (SBERT embeddings) and LF-AmazonTitles-131K (BoW features) datasets, uncovering strong feature-label associations, contextual cues, and filtering of irrelevant tokens.Achieved improved Precision@k and nDCG@k under Gaussian Noise, Feature Masking, and Blackbox FGSM adversarial strategies, demonstrating stronger robustness and reliability.",
        image: "/projects/reliable_xml.jpg",
        tags: ["",],
        demoUrl: "https://drive.google.com/file/d/1P6hjbU1yci4DOYJfx-bgAezDtUnTe9S0/view?usp=sharing",
        githubUrl: "https://github.com/adityarathor007/RobustParabel",
    },

      {
        id:6,
        title:"TRS Arxiv Website",
        description: "Builded a workflow for paper submission and revieweing with role-based portals for authors, reviewers, and editors, streamlining the feedback process.Implemented secure user authentication using JWT tokens with email verification and profile section for tracking submissions status.",
        image: "/projects/trs_arxiv.png",
        tags: ["",],
        demoUrl: "https://youtu.be/8qe59qJgjE0",
        githubUrl: "https://github.com/devlup-labs/TRS-archive",
    },
      {
        id:7,
        title:"Document Recognition and Translation",
        description: "Builded a pipeline to recognize and preserve text formatting (font style & size) in PDFs during language translation by combining CNN features, SVM classification, and regression models.Automated translation and reconstruction of multilingual PDFs by predicting font properties and positioning words using bounding boxes, ensuring formatting consistency across languages.",
        image: "/projects/document_trans.png",
        tags: [""],
        demoUrl: "https://drive.google.com/file/d/1wvzlNiH6UCAdK1rxX_d4OJolv8fVKioH/view?usp=sharing",
        githubUrl: "https://github.com/adirathor-dev/DocumentTranslation",
    },
    {
        id:8,
        title:"Face_recoginition",
        description: "Trained multiple classifiers on CNN and HOG features over the LFW dataset, and combined them using a weighted majority voting ensemble for robust face recognition. Built a similarity predictor model using an ANN that compares feature vectors of two input images to determine whether they belong to the same person.",
        image: "/projects/face_recoginition.png",
        tags: ["",],
        demoUrl: "https://adityarathor007.github.io/Face_Recognition/",
        githubUrl: "https://github.com/adityarathor007/Face_Recognition",
    },


]
